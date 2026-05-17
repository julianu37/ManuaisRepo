<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Manual;
use Illuminate\Http\Request;

class ManualController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $manuals = \App\Models\Manual::with('printerModel.brand')->latest()->paginate(20);
        return inertia('admin/manuals/index', ['manuals' => $manuals]);
    }

    public function create()
    {
        $brands = \App\Models\Brand::with('printerModels')->get();
        return inertia('admin/manuals/create', ['brands' => $brands]);
    }

    public function store(\Illuminate\Http\Request $request)
    {
        $modelIds = $request->input('printer_model_ids', []);
        
        $firstModelId = !empty($modelIds) ? $modelIds[0] : null;
        $brand = null;
        if ($firstModelId) {
            $model = \App\Models\PrinterModel::with('brand')->find($firstModelId);
            $brand = $model ? $model->brand : null;
        }
        
        $isEpson = $brand && strtolower($brand->name) === 'epson';

        $rules = [
            'printer_model_ids' => 'required|array|min:1',
            'printer_model_ids.*' => 'exists:printer_models,id',
            'title' => 'required|string|max:255',
        ];

        if ($isEpson) {
            $rules['folder_path'] = 'required|string|max:255';
        } else {
            $rules['pdf'] = 'required|file|mimes:pdf|max:1048576';
        }

        $request->validate($rules);

        // Garante que o link de storage existe
        \Illuminate\Support\Facades\Artisan::call('storage:link');

        if ($isEpson) {
            $folderPath = trim($request->folder_path, '/');
            
            foreach ($modelIds as $modelId) {
                \App\Models\Manual::create([
                    'printer_model_id' => $modelId,
                    'title' => $request->title,
                    'file_path' => $folderPath,
                    'original_filename' => basename($folderPath),
                    'file_size_bytes' => 0,
                    'status' => 'indexed',
                    'type' => 'html',
                    'indexed_at' => now(),
                ]);
            }
            
            return redirect()->route('admin.manuais.index')->with('success', 'Manuais HTML vinculados com sucesso!');
        }

        $file = $request->file('pdf');
        $path = $file->store("manuais/{$brand->slug}", 'local');

        foreach ($modelIds as $modelId) {
            $manual = \App\Models\Manual::create([
                'printer_model_id' => $modelId,
                'title' => $request->title,
                'file_path' => $path,
                'original_filename' => $file->getClientOriginalName(),
                'file_size_bytes' => $file->getSize(),
                'status' => 'pending',
                'type' => 'pdf',
            ]);

            \App\Jobs\ProcessManualJob::dispatch($manual);
        }

        return redirect()->route('admin.manuais.index')->with('success', 'Manuais enviados! O processamento iniciará em breve.');
    }

    public function reprocess(\App\Models\Manual $manual)
    {
        $manual->update(['status' => 'pending', 'processing_error' => null]);
        \App\Jobs\ProcessManualJob::dispatch($manual);

        return back()->with('success', 'Re-indexação iniciada.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Manual $manual)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Manual $manual)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Manual $manual)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Manual $manual)
    {
        $manual->errorCodes()->delete();
        
        $manualPath = $manual->file_path;
        $type = $manual->type;
        $manual->delete();

        // Verifica se ainda existem outros manuais usando este mesmo arquivo (mesmo modelo ou outro)
        $isShared = \App\Models\Manual::where('file_path', $manualPath)->exists();

        if (!$isShared) {
            if ($type === 'html') {
                // Não deletamos pastas HTML geridas via FTP/MobaXterm
            } else {
                if (\Illuminate\Support\Facades\Storage::disk('local')->exists($manualPath)) {
                    \Illuminate\Support\Facades\Storage::disk('local')->delete($manualPath);
                }
            }
        }

        return redirect()->back()->with('success', 'Manual excluído com sucesso!');
    }
}

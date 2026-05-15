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
        $request->validate([
            'printer_model_id' => 'required|exists:printer_models,id',
            'title' => 'required|string|max:255',
            'pdf' => 'required|file|mimes:pdf|max:102400', // 100MB
        ]);

        $file = $request->file('pdf');
        $brand = \App\Models\PrinterModel::find($request->printer_model_id)->brand;
        $path = $file->store("manuals/{$brand->slug}", 'local');

        $manual = \App\Models\Manual::create([
            'printer_model_id' => $request->printer_model_id,
            'title' => $request->title,
            'file_path' => $path,
            'original_filename' => $file->getClientOriginalName(),
            'file_size_bytes' => $file->getSize(),
            'status' => 'pending',
        ]);

        \App\Jobs\ProcessManualJob::dispatch($manual);

        return redirect()->route('admin.manuais.index')->with('success', 'Manual enviado! O processamento iniciará em breve.');
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
        // Delete the physical file
        if (\Illuminate\Support\Facades\Storage::disk('local')->exists($manual->file_path)) {
            \Illuminate\Support\Facades\Storage::disk('local')->delete($manual->file_path);
        }

        // Delete associated records
        $manual->errorCodes()->delete();
        
        $manual->delete();
        return redirect()->back()->with('success', 'Manual excluído com sucesso!');
    }
}

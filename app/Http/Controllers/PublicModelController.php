<?php

namespace App\Http\Controllers;

use App\Models\PrinterModel;
use App\Models\ErrorCode;
use Illuminate\Http\Request;

class PublicModelController extends Controller
{
    public function show(Request $request, $id)
    {
        $model = PrinterModel::with(['brand', 'manuals'])->findOrFail($id);
        
        $query = $request->input('q', '');
        $errorResults = null;

        if (!empty($query)) {
            $errorResults = ErrorCode::with(['manual', 'manual.printerModel', 'manual.printerModel.brand'])
                ->whereHas('manual', function ($q) use ($id) {
                    $q->where('printer_model_id', $id);
                })
                ->where(function ($q) use ($query) {
                    $q->where('code', 'like', "%{$query}%")
                      ->orWhere('raw_context', 'like', "%{$query}%");
                })
                ->paginate(15)
                ->withQueryString();
        }

        return inertia('models/show', [
            'printerModel' => $model,
            'searchTerm' => $query,
            'errorResults' => $errorResults
        ]);
    }
}

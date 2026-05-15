<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Manual;

class ManualViewController extends Controller
{
    public function show(Manual $manual, int $page)
    {
        return inertia('manual/viewer', [
            'manual' => $manual->load('printerModel.brand'),
            'initialPage' => $page,
            'pdfUrl' => route('manual.stream', $manual->id)
        ]);
    }

    public function stream(Manual $manual)
    {
        $path = storage_path('app/private/' . $manual->file_path);
        
        if (!file_exists($path)) {
            abort(404);
        }

        return response()->file($path, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="' . $manual->original_filename . '"'
        ]);
    }
}

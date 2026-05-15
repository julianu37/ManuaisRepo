<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ErrorCode;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('q');

        if (!$query) {
            return redirect()->route('home');
        }

        $errorResults = ErrorCode::query()
            ->with(['manual.printerModel.brand'])
            ->where('code', 'LIKE', "%{$query}%")
            ->latest()
            ->paginate(15, ['*'], 'errors_page');

        $manualResults = \App\Models\Manual::query()
            ->with(['printerModel.brand'])
            ->where('title', 'LIKE', "%{$query}%")
            ->orWhereHas('printerModel', function ($q) use ($query) {
                $q->where('name', 'LIKE', "%{$query}%")
                  ->orWhereHas('brand', function ($b) use ($query) {
                      $b->where('name', 'LIKE', "%{$query}%");
                  });
            })
            ->where('status', 'indexed') // Apenas manuais processados
            ->latest()
            ->paginate(15, ['*'], 'manuals_page');

        return inertia('search/results', [
            'errorResults' => $errorResults,
            'manualResults' => $manualResults,
            'searchTerm' => $query
        ]);
    }
}

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

        $modelId = $request->input('model_id');

        $errorResultsQuery = ErrorCode::query()
            ->with(['manual.printerModel.brand'])
            ->where('code', 'LIKE', "%{$query}%");

        if ($modelId) {
            $errorResultsQuery->whereHas('manual.printerModel', function ($q) use ($modelId) {
                $q->where('id', $modelId);
            });
        }

        $errorResults = $errorResultsQuery->latest()->paginate(15, ['*'], 'errors_page')->withQueryString();

        $manualResultsQuery = \App\Models\Manual::query()
            ->with(['printerModel.brand'])
            ->where('status', 'indexed');

        if ($modelId) {
            $manualResultsQuery->where('printer_model_id', $modelId);
        } else {
            $manualResultsQuery->where(function ($q) use ($query) {
                $q->where('title', 'LIKE', "%{$query}%")
                  ->orWhereHas('printerModel', function ($sq) use ($query) {
                      $sq->where('name', 'LIKE', "%{$query}%")
                        ->orWhereHas('brand', function ($b) use ($query) {
                            $b->where('name', 'LIKE', "%{$query}%");
                        });
                  });
            });
        }

        $manualResults = $manualResultsQuery->latest()->paginate(15, ['*'], 'manuals_page')->withQueryString();

        $selectedModel = null;
        if ($modelId) {
            $selectedModel = \App\Models\PrinterModel::with('brand')->find($modelId);
        }

        return inertia('search/results', [
            'errorResults' => $errorResults,
            'manualResults' => $manualResults,
            'searchTerm' => $query,
            'modelId' => $modelId,
            'selectedModel' => $selectedModel
        ]);
    }
}

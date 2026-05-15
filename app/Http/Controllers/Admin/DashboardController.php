<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\PrinterModel;
use App\Models\Manual;
use App\Models\ErrorCode;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return inertia('admin/dashboard', [
            'stats' => [
                'brands_count' => Brand::count(),
                'models_count' => PrinterModel::count(),
                'manuals_count' => Manual::count(),
                'error_codes_count' => ErrorCode::count(),
            ],
            'recent_manuals' => Manual::with('printerModel.brand')->latest()->take(5)->get()
        ]);
    }
}

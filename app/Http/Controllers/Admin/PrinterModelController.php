<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PrinterModel;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PrinterModelController extends Controller
{
    public function index()
    {
        $models = PrinterModel::with('brand')->latest()->paginate(20);
        return inertia('admin/printer-models/index', ['models' => $models]);
    }

    public function create()
    {
        $brands = Brand::all();
        return inertia('admin/printer-models/create', ['brands' => $brands]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'brand_id' => 'required|exists:brands,id',
            'name' => 'required|string|max:255',
        ]);

        PrinterModel::create([
            'brand_id' => $request->brand_id,
            'name' => $request->name,
            'slug' => Str::slug($request->name),
        ]);

        return redirect()->route('admin.modelos.index')->with('success', 'Modelo criado com sucesso!');
    }

    public function show(PrinterModel $printerModel) { }
    public function edit(PrinterModel $printerModel) { }
    public function update(Request $request, PrinterModel $printerModel) { }
    public function destroy(PrinterModel $printerModel) { 
        $printerModel->delete();
        return redirect()->back()->with('success', 'Modelo excluído com sucesso!');
    }
}

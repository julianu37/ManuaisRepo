<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $brands = Brand::orderBy('name')->get();
        return inertia('admin/brands/index', [
            'brands' => $brands
        ]);
    }

    public function create()
    {
        return inertia('admin/brands/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:brands',
            'slug' => 'required|string|max:255|unique:brands',
        ]);

        Brand::create($validated);

        return redirect()->route('admin.marcas.index')->with('success', 'Fabricante criado com sucesso!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Brand $brand)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Brand $brand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Brand $brand)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand)
    {
        $brand->delete();
        return redirect()->back()->with('success', 'Fabricante e seus modelos foram excluídos.');
    }
}

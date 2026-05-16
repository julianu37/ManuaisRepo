<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return inertia('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
        'models' => \App\Models\PrinterModel::with('brand:id,name')->get(['id', 'name', 'brand_id']),
    ]);
})->name('home');

// Busca Pública
Route::get('/buscar', [\App\Http\Controllers\SearchController::class, 'search'])->name('search');
Route::get('/manual/{manual}/pagina/{page}', [\App\Http\Controllers\ManualViewController::class, 'show'])->name('manual.view');
Route::get('/manual/{manual}/stream', [\App\Http\Controllers\ManualViewController::class, 'stream'])->name('manual.stream');

// Admin / Dashboard
Route::middleware(['auth', 'verified', 'admin'])->prefix('dashboard')->name('admin.')->group(function () {
    Route::get('/', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard');
    Route::resource('marcas', \App\Http\Controllers\Admin\BrandController::class)->parameters(['marcas' => 'brand']);
    Route::resource('modelos', \App\Http\Controllers\Admin\PrinterModelController::class)->parameters(['modelos' => 'printerModel']);
    Route::resource('manuais', \App\Http\Controllers\Admin\ManualController::class)->parameters(['manuais' => 'manual']);
    Route::post('manuais/{manual}/reprocessar', [\App\Http\Controllers\Admin\ManualController::class, 'reprocess'])->name('manuais.reprocess');
});

Route::middleware(['auth', 'verified'])->group(function () {
    // Rota padrão removida ou redirecionada se necessário
});

require __DIR__.'/settings.php';

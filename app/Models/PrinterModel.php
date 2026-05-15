<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PrinterModel extends Model
{
    /** @use HasFactory<\Database\Factories\PrinterModelFactory> */
    use HasFactory;

    protected $fillable = ['brand_id', 'name', 'slug'];

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function manuals(): HasMany
    {
        return $this->hasMany(Manual::class);
    }
}

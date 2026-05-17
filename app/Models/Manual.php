<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Manual extends Model
{
    /** @use HasFactory<\Database\Factories\ManualFactory> */
    use HasFactory;

    protected $fillable = [
        'printer_model_id',
        'title',
        'file_path',
        'original_filename',
        'total_pages',
        'file_size_bytes',
        'status',
        'type',
        'processing_error',
        'indexed_at',
    ];

    protected $casts = [
        'indexed_at' => 'datetime',
    ];

    public function printerModel(): BelongsTo
    {
        return $this->belongsTo(PrinterModel::class);
    }

    public function errorCodes(): HasMany
    {
        return $this->hasMany(ErrorCode::class);
    }
}

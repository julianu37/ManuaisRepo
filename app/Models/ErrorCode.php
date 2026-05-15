<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ErrorCode extends Model
{
    /** @use HasFactory<\Database\Factories\ErrorCodeFactory> */
    use HasFactory;

    protected $fillable = [
        'manual_id',
        'code',
        'description',
        'page_number',
        'raw_context',
    ];

    public function manual(): BelongsTo
    {
        return $this->belongsTo(Manual::class);
    }
}

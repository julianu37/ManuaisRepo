<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('manuals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('printer_model_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->string('file_path');
            $table->string('original_filename');
            $table->integer('total_pages')->default(0);
            $table->bigInteger('file_size_bytes')->default(0);
            $table->enum('status', ['pending', 'processing', 'indexed', 'failed'])->default('pending');
            $table->text('processing_error')->nullable();
            $table->timestamp('indexed_at')->nullable();
            $table->timestamps();

            $table->index(['printer_model_id', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manuals');
    }
};

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
        Schema::create('error_codes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('manual_id')->constrained()->cascadeOnDelete();
            $table->string('code');
            $table->text('description')->nullable();
            $table->integer('page_number');
            $table->text('raw_context')->nullable();
            $table->timestamps();

            $table->index('code');
            $table->index(['code', 'manual_id']);
        });

        // MariaDB suporta FULLTEXT index
        DB::statement('ALTER TABLE error_codes ADD FULLTEXT INDEX ft_search (code, description, raw_context)');
    }

    public function down(): void
    {
        Schema::dropIfExists('error_codes');
    }
};

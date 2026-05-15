<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessManualJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $timeout = 600; // 10 minutos

    public function __construct(public \App\Models\Manual $manual)
    {
    }

    public function handle(): void
    {
        $this->manual->update(['status' => 'processing']);

        $patterns = $this->manual->printerModel->brand->error_patterns;

        $process = new \Symfony\Component\Process\Process([
            'C:\\Python314\\python.exe',
            base_path('scripts/index_manual.py'),
            '--pdf', storage_path('app/private/' . $this->manual->file_path),
            '--patterns', json_encode($patterns),
        ], null, [
            'PYTHONPATH' => getenv('APPDATA') . '\\Python\\Python314\\site-packages'
        ]);

        $process->setTimeout($this->timeout);
        $process->run();

        if (!$process->isSuccessful()) {
            $this->manual->update([
                'status' => 'failed',
                'processing_error' => 'Python script failed: ' . $process->getErrorOutput(),
            ]);
            return;
        }

        $output = json_decode($process->getOutput(), true);

        if (!$output || !$output['success']) {
            $this->manual->update([
                'status' => 'failed',
                'processing_error' => 'Extraction failed: ' . ($output['error'] ?? 'Unknown error'),
            ]);
            return;
        }

        // Deleta códigos antigos se houver (reprocessamento)
        $this->manual->errorCodes()->delete();

        // Bulk insert dos códigos encontrados
        $codes = collect($output['codes'])->map(function ($item) {
            return [
                'manual_id' => $this->manual->id,
                'code' => $item['code'],
                'page_number' => $item['page'],
                'raw_context' => $item['context'],
                'created_at' => now(),
                'updated_at' => now(),
            ];
        });

        foreach ($codes->chunk(100) as $chunk) {
            \App\Models\ErrorCode::insert($chunk->toArray());
        }

        $this->manual->update([
            'status' => 'indexed',
            'total_pages' => $output['total_pages'],
            'indexed_at' => now(),
        ]);
    }
}

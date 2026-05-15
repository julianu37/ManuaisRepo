<?php
require __DIR__.'/vendor/autoload.php';
$app = require __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$brand = \App\Models\Brand::find(1);
if ($brand) {
    // Regex ninja: Captura o SC desde que ele esteja isolado numa linha, seguido de :, ou seguido do Tipo de Erro (A, B, C, D)
    $brand->error_patterns = ['primary' => '(?:^|\n)\s*(SC[\s\-]?\d{3,4}(?:-\d{2,3})?)(?=\s*(?:\n|:|\s+[A-D]\b))'];
    $brand->save();
    echo "Regex atualizado com sucesso!\n";
}

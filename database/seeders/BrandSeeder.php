<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = [
            [
                'name' => 'Ricoh',
                'slug' => 'ricoh',
                'error_patterns' => [
                    'primary' => '(?:^|\n)\s*(SC[\s\-]?\d{3,4}(?:-\d{2,3})?)(?=\s*(?:\n|:|\s+[A-D]\b))',
                ],
            ],
            [
                'name' => 'Epson',
                'slug' => 'epson',
                'error_patterns' => [
                    'primary' => '\b([EWI][\-]\d{2,3})\b',
                ],
            ],
            [
                'name' => 'Kyocera',
                'slug' => 'kyocera',
                'error_patterns' => [
                    'primary' => '\b(C[F0-9]\d{3,4})\b',
                ],
            ],
            [
                'name' => 'Xerox',
                'slug' => 'xerox',
                'error_patterns' => [
                    'primary' => '\b(\d{3}[\-]\d{3})\b',
                ],
            ],
            [
                'name' => 'Zebra',
                'slug' => 'zebra',
                'error_patterns' => [
                    'primary' => '\b(?:ERROR\s+(?:CONDITION\s+)?\d{1,4}|ALERT\s+\d{1,4})\b',
                ],
            ],
        ];

        foreach ($brands as $brand) {
            \App\Models\Brand::updateOrCreate(['slug' => $brand['slug']], $brand);
        }
    }
}

<?php
require __DIR__.'/vendor/autoload.php';

$regex = '/(?:^|\n)\s*(SC[\s\-]?\d{3,4}(?:-\d{2,3})?)(?=\s*(?:\n|:|\s+[A-D]\b))/i';

$tests = [
    "SC990-00\nD\nSoftware",
    "SC940-00\nC\nExit",
    "SC542: Fusing error",
    "SC542 A Fusing error",
    "1-990-001\nSC990 pit detail",
    "SC991 Operation Mode",
    "\nSC899\n",
];

foreach ($tests as $text) {
    if (preg_match($regex, $text, $matches)) {
        echo "MATCH: " . str_replace("\n", '\n', $text) . " -> " . $matches[1] . "\n";
    } else {
        echo "FAIL:  " . str_replace("\n", '\n', $text) . "\n";
    }
}

<?php

require_once __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

$databaseConfig = [
    'host' => $_ENV['MYSQL_DB_HOST'] ?? 'localhost',
    'username' => $_ENV['MYSQL_DB_USER'] ?? 'root',
    'password' => $_ENV['MYSQL_DB_PASS'] ?? '',
    'database' => $_ENV['MYSQL_DB_NAME'] ?? 'database1',
];

$environment = [
    'environment' => $_ENV['ENVIRONMENT'] ?? 'development',
    'debug' => $_ENV['DEBUG'] ?? true,
    'databaseConfig' => $databaseConfig,
    'saveLocation' => __DIR__ . ($_ENV['SAVE_LOCATION'] ?? '/../uploads'),
];

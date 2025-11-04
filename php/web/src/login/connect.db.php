<?php

require_once __DIR__ . '/../environment.php';

$conn = mysqli_connect($databaseConfig['host'], $databaseConfig['username'], $databaseConfig['password'], $databaseConfig['database']);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

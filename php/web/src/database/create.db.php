<?php

require_once __DIR__ . '/../../environment.php';

$conn = mysqli_connect($databaseConfig['host'], $databaseConfig['username'], $databaseConfig['password']);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

$query = "CREATE DATABASE IF NOT EXISTS `{$databaseConfig['database']}`";

if (mysqli_query($conn, $query)) {
    echo 'Database successfully created';
} else {
    echo 'Database creation failed: ' . mysqli_error($conn);
}

mysqli_close($conn);

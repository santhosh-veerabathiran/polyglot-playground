<?php

require_once __DIR__ . '/../../environment.php';

$conn1 = mysqli_connect($databaseConfig['host'], $databaseConfig['username'], $databaseConfig['password'], $databaseConfig['database']);

if (!$conn1) {
    die('Connection failed :' . mysqli_connect_error());
} else {
    echo 'Connection 1 success<br>';
}

mysqli_close($conn1);

$conn2 = new mysqli($databaseConfig['host'], $databaseConfig['username'], $databaseConfig['password'], $databaseConfig['database']);

if ($conn2->connect_error) {
    die('Connection failed :' . $conn2->connect_error);
} else {
    echo 'Connection 2 success<br>';
}

mysqli_close($conn2);

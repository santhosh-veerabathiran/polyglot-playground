<?php

require_once __DIR__ . '/../../environment.php';

$conn = mysqli_connect($databaseConfig['host'], $databaseConfig['username'], $databaseConfig['password'], $databaseConfig['database']);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

$query = 'CREATE TABLE employee(employee_id int primary key, employee_name varchar(30), gender varchar(10), salary int)';

if (mysqli_query($conn, $query)) {
    echo 'Table successfully created';
} else {
    echo 'Table creation failed: ' . mysqli_error($conn);
}

mysqli_close($conn);

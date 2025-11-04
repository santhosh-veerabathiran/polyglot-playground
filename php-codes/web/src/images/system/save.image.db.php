<?php

require_once __DIR__ . '/../../environment.php';

$conn = mysqli_connect($databaseConfig['host'], $databaseConfig['username'], $databaseConfig['password'], $databaseConfig['database']);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

$uploadsDir = $environment['saveLocation'];
$target_file = $uploadsDir . '/' . basename($_FILES['image']['name']);

if (!is_dir($uploadsDir)) {
    mkdir($uploadsDir, 0755, true); // 0755 = read/write/execute owner, read/execute others
}

$uploadok = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

if (isset($_POST['submit'])) {
    $check = getimagesize($_FILES['image']['tmp_name']);

    if ($check !== false) {
        echo 'File is an image -' . $check['mime'] . '.<br>';
        $uploadok = 1;
    } else {
        echo 'file is not an image.<br>';
        $uploadok = 0;
    }
}

if (file_exists($target_file)) {
    echo 'Sorry, file already exists.<br>';
    $uploadok = 0;
}

if ($_FILES['image']['size'] < 5120) {
    //5120 Bytes = 5 Kilo Bytes
    echo 'Sorry, your file is too small.<br>';
    $uploadok = 0;
}

if ($imageFileType != 'jpg' && $imageFileType != 'png') {
    echo 'Sorry, only JPG & PNG file are allowed.<br>';
    $uploadok = 0;
}

if ($uploadok == 0) {
    echo 'Sorry, your file was not uploaded.<br>';
} else {
    if (move_uploaded_file($_FILES['image']['tmp_name'], $target_file)) {
        echo 'The file' . htmlspecialchars(basename($_FILES['image']['name'])) . 'has been saved to system.<br>';
        $file_name = basename($_FILES['image']['name']);

        $q = 'CREATE TABLE IF NOT EXISTS imagename(image_id INT PRIMARY KEY AUTO_INCREMENT, image_name VARCHAR(255))';

        if (!mysqli_query($conn, $q)) {
            throw new Exception('Table creation failed: ' . mysqli_error($conn));
        }

        $q = "INSERT INTO imagename(image_name) VALUES('$file_name')";
        $r = mysqli_query($conn, $q);

        if ($r) {
            echo 'File name uploaded to database successfully<br>';
        } else {
            echo 'file name not uploaded to database<br>';
        }
    } else {
        echo 'Sorry, there was an error uploading your file.<br>';
    }
}

mysqli_close($conn);

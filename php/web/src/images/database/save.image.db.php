<?php

require_once __DIR__ . '/../../environment.php';

$conn = mysqli_connect($databaseConfig['host'], $databaseConfig['username'], $databaseConfig['password'], $databaseConfig['database']);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

$status = $statusMsg = '';

if (isset($_POST['submit']) && isset($_FILES['image'])) {
    if (getimagesize($_FILES['image']['tmp_name']) == false) {
        $statusMsg = 'please select an image file to upload.';
    } else {
        $imgTmpName = $_FILES['image']['tmp_name'];
        $imgName = $_FILES['image']['name'];

        [$width, $height, $type, $attr] = getimagesize($imgTmpName);

        $image = base64_encode(file_get_contents($imgTmpName));

        $sql = 'CREATE TABLE IF NOT EXISTS images(image_id INT PRIMARY KEY AUTO_INCREMENT, image MEDIUMTEXT, width INT, height INT)';

        if (!mysqli_query($conn, $sql)) {
            throw new Exception('Table creation failed: ' . mysqli_error($conn));
        }

        $sql = "INSERT INTO images(image, width, height) VALUES('$image', $width, $height)";

        if ($conn->query($sql)) {
            $statusMsg = 'Stored';
        } else {
            $statusMsg = 'Something went wrong try again';
        }
    }
    header("location: upload.image.php?status=$statusMsg");
} else {
    header('location: upload.image.php');
}

mysqli_close($conn);

<?php

require_once __DIR__ . '/../database/load.env.php';

$conn = mysqli_connect($databaseConfig['host'], $databaseConfig['username'], $databaseConfig['password']);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

$target_dir = 'img/';
$q = 'SELECT * FROM imagename';
$r = mysqli_query($conn, $q);

if (mysqli_num_rows($r) > 0) {
    while ($data = mysqli_fetch_assoc($r)) {
        $img = $target_dir . $data['image1'];
        echo "<img src='$img' height='100px' width='100px'>";
    }
} else {
    echo 'No image uploaded';
}
?>
<br><br>
<a href="uploadimage.php">Upload Image</a>

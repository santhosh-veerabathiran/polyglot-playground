<?php
$sname = "localhost";
$uname = "root";
$password = "";
$dbname = "mydatabase1";

$con = mysqli_connect($sname,$uname,$password,$dbname);

if(!$con) {
    die("Connection Failed Try Again");
}

$target_dir = "img/";
$target_file = $target_dir.basename($_FILES['image']['name']);

$uploadok = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

if(isset($_POST['submit'])) {
    $check = getimagesize($_FILES['image']["tmp_name"]);

    if($check !== false) {
        echo "File is an image -".$check['mime'].".";
        $uploadok = 1;
    } else {
        echo "file is not an image.";
        $uploadok = 0;
    }
}

if(file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadok = 0;
}

if($_FILES['image']['size'] < 5120) { //5120 Bytes = 5 Kilo Bytes
    echo "Sorry, your file is too small";
    $uploadok = 0;
}

if($imageFileType != "jpg" && $imageFileType != "png") {
    echo "Sorry, only JPG & PNG file are allowed.";
    $uploadok = 0;
}

if($uploadok == 0) {
    echo "Sorry, your file was not uploaded.";
} else {
    if(move_uploaded_file($_FILES['image']['tmp_name'], $target_file)) {
        echo "The file".htmlspecialchars(basename($_FILES['image']['name']))."has been uploaded.";
        $file_name = basename($_FILES['image']['name']);

        $q = "INSERT INTO imagename(image1) VALUES('$file_name')";
        $r = mysqli_query($con,$q);

        if($r) {
            echo "File name uploaded to database successfully";
        }
        else {
            echo "file name not uploaded to database";
        }

    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
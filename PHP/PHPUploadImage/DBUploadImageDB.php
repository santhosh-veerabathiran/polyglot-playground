<?php
$sname = "localhost";
$uname = "root";
$password = "";
$dbname = "mydatabase1";

$con = mysqli_connect($sname,$uname,$password,$dbname);

if(!$con) {
    die("Connection Failed Try Again");
}

$status = $statusMsg="";
if (isset($_POST['submit'])) {
    if(getimagesize($_FILES['image']['tmp_name']) == false) {
        $statusMsg = "please select an image file to upload.";
    }
    else {
        $image = $_FILES['image']["tmp_name"];
        $name = $_FILES["image"]["name"];

        $image = file_get_contents($image);
        $image = base64_encode($image);

        $sql = "insert into images(image) values('$image')";
        if($con -> query($sql)) {
            $statusMsg = "Stored";
        }
        else {
            $statusMsg = "Something went wrong try again";
        }
    } 
    header("location: dbuploadimage.php?status=$statusMsg");
}
else {
header("location: dbuploadimage.php");
}
?>
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
$q = "SELECT * FROM imagename";
$r = mysqli_query($con,$q);
if(mysqli_num_rows($r) > 0) {
    while($data = mysqli_fetch_assoc($r)) {
        $img = $target_dir . $data['image1'];
        echo "<img src='$img' height='100px' width='100px'>";
    }
}
else {
    echo "No image uploaded";
}
?>
<br><br>
<a href="uploadimage.php">Upload Image</a>
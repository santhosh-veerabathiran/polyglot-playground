<?php
    $con1 = mysqli_connect("localhost","root","","MyDatabase1");

    if (!$con1) {
        die("Connection Error:".mysqli_connect_error());
    }
    else {
        echo "Connection 1 success<br>";
    }

    mysqli_close($con1);

    $con2 = new mysqli("localhost","root","","MyDatabase1");

    if ($con2->connect_error) {
        die("Connection Error:".$con2->connect_error);
    }
    else {
        echo "Connection 2 success";
    }

    mysqli_close($con2);
?>
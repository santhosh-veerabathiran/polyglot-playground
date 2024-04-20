<?php 
    $sname = "localhost";
    $uname = "root";
    $password = "";
    $dbname = "HomeServices";

    $con = mysqli_connect($sname,$uname,$password,$dbname);

    if(!$con) {
        echo "Connection Failed Try Again";
    }
?>
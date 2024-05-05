<?php
    $con = mysqli_connect("localhost","root","");

    if(!$con) {
        die ("Connection Error: " . mysqli_connect_error());
    }
    
    $query = "Create Database MyDatabase1";

    if(mysqli_query($con,$query)) {
        echo "Database Successfully Created";
    }
    else {
        echo "Database Creation Failed" . mysqli_error($con);
    }

    mysqli_close($con);
?>
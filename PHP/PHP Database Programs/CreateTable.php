<?php
    $con = mysqli_connect("localhost","root","","mydatabase1");

    if(!$con) {
        die("Connection Error: " . mysqli_error($con));
    }

    $query = "Create Table Employee(EmpID int primary key, EmpName varchar(30), Gender varchar(10), Salary int)";

    if(mysqli_query($con,$query)) {
        echo "Table Successfully Created";
    }
    else {
        echo "Table Creation Failed" . mysqli_error($con);
    }

    mysqli_close($con);
?>
<style>
    body {
        background-color: antiquewhite;
        text-align: center;
    }
    .stutable, .stutable th,.stutable td {
        border: 1px solid black;
        border-collapse: collapse;
        margin-left: auto;
        margin-right: auto;
        padding: 2%;
    }
    .stutable {
        width: 400px;
        height: auto;
    }
    .stutable tr:nth-child(odd) {
        background-color: #b2d0d6;
    }
    .stutable tr:nth-child(even) {
        background-color: lightcyan;
    }
</style>

<h1>Student Table</h1>

<?php
    $con = mysqli_connect("localhost","root","","MyDatabase1");

    if(!$con) {
        die("Connection Error: " . mysqli_connect_error());
    }
    
    $query = "Select * from Student";

    $result = mysqli_query($con,$query);

    $numrows = mysqli_num_rows($result);

    if($numrows > 0) {
        echo "<table class='stutable'>";
        echo "<tr>";
        echo "<th>ID</th>";
        echo "<th>Name</th>";
        echo "<th>Gender</th>";
        echo "<th>Age</th>";
        echo "</tr>";
        
        while($row = mysqli_fetch_assoc($result)) {            
            echo "<tr>";
            echo "<td>" . $row["StuID"] . "</td>";
            echo "<td>" . $row["StuName"] . "</td>";
            echo "<td>" . $row["Gender"] . "</td>";
            echo "<td>" . $row["Age"] . "</td>";
            echo "</tr>";
        }
        echo "</table>";       
    }
    else {
        echo "No record found";
    }
    mysqli_close($con);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Table</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <style>
        body {
            background-color: antiquewhite;
            text-align: center;
        }

        .stutable,
        .stutable th,
        .stutable td {
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
    require_once __DIR__ . '/../../environment.php';

    try {
        $conn = mysqli_connect($databaseConfig['host'], $databaseConfig['username'], $databaseConfig['password'], $databaseConfig['database']);

        if (!$conn) {
            die('Connection failed: ' . mysqli_connect_error());
        }

        $query = 'CREATE TABLE IF NOT EXISTS students(student_id int primary key, student_name varchar(30), gender varchar(10), age int)';

        if (!mysqli_query($conn, $query)) {
            throw new Exception('Table creation failed: ' . mysqli_error($conn));
        }

        $query = 'SELECT * FROM students';

        $result = mysqli_query($conn, $query);

        $numrows = mysqli_num_rows($result);

        if ($numrows > 0) {
            echo "<table class='stutable'>";
            echo '<tr>';
            echo '<th>ID</th>';
            echo '<th>Name</th>';
            echo '<th>Gender</th>';
            echo '<th>Age</th>';
            echo '</tr>';

            while ($row = mysqli_fetch_assoc($result)) {
                echo '<tr>';
                echo '<td>' . $row['student_id'] . '</td>';
                echo '<td>' . $row['student_name'] . '</td>';
                echo '<td>' . $row['gender'] . '</td>';
                echo '<td>' . $row['age'] . '</td>';
                echo '</tr>';
            }
            echo '</table>';
        } else {
            echo 'No record found';
        }
        mysqli_close($conn);
    } catch (Throwable $e) {
        echo 'Caught: ' . $e->getMessage();
    }
    ?>
</body>

</html>

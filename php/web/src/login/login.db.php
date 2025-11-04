<?php

session_start();

include 'connect.db.php';

if (isset($_POST['uname']) && isset($_POST['password'])) {
    function validate($data)
    {
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);

        return $data;
    }
}

$uname = validate($_POST['uname']);
$pass = validate($_POST['password']);

if (empty($uname)) {
    header('Location: index.php?error=User Name is required');
} elseif (empty($pass)) {
    header('Location: index.php?error=Password is required');
}

$query =
    'CREATE TABLE IF NOT EXISTS users (user_id INT(11) NOT NULL AUTO_INCREMENT, user_name VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL, fname VARCHAR(50) NOT NULL, lname VARCHAR(50) NOT NULL, PRIMARY KEY (user_id))';

$result = mysqli_query($conn, $query);

if (!$result) {
    echo 'Table creation failed';
    exit();
}

$query = "SELECT * FROM users WHERE user_name = '$uname'";

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result)) {
    $row = mysqli_fetch_assoc($result);

    if ($row['user_name'] === $uname && $row['password'] === $pass) {
        echo 'Login success';

        $_SESSION['user_name'] = $row['user_name'];
        $_SESSION['name'] = $row['fname'] . ' ' . $row['lname'];
        $_SESSION['user_id'] = $row['user_id'];

        header('Location: home.php');
        exit();
    }
}
header('Location: index.php?error=Incorrect User Name or Passsword');
exit();

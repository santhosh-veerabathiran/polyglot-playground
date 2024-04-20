<?php
    session_start();

    include "db_connect.php";

    if(isset($_POST["uname"]) && isset($_POST["password"])) {

        function validate($data) {
            $data = trim($data);
            $data = stripcslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
    }

    $uname = validate($_POST["uname"]);
    $pass = validate($_POST["password"]);

    if(empty($uname)) {
        header("Location: index.php?error=User Name is required");
    }
    else if(empty($pass)) {
        header("Location: index.php?error=Password is required");
    }

    $query = "select * from users where user_name = '$uname'";

    $result = mysqli_query($con,$query);

    if(mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);
        if($row["user_name"] === $uname && $row["password"] === $pass) {
            echo "Login success";
            $_SESSION['user_name'] = $row["user_name"];
            $_SESSION['name'] = $row["fname"] ." " . $row["lname"];
            $_SESSION['id'] = $row['id'];
            header("Location: home.php");
            exit();
        }
        else {
            header("Location: index.php?error=Incorrect User Name or Passsword");
        }
    }
    else {
        header("Location: index.php?error=User Not Found");
        exit();
    }
?>
<?php
if (isset($_GET['submit'])) {
    $num1 = (int) $_GET['num1'];
    $num2 = (int) $_GET['num2'];

    if(empty($num1) || empty($num2)) {
        unset($num1, $num2);
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greatest Of Two Numbers</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <h1>Greatest Of Two Numbers</h1>
    <form>
        <div class="input">
            <label for="num1">Number 1: </label>
            <input type="text" name="num1" id="num1" value="<?php if (isset($num1)) { echo $num1; } ?>">
        </div>

        <div class="input">
            <label for="num2">Number 2: </label>
            <input type="text" name="num2" id="num2" value="<?php if (isset($num2)) { echo $num2; } ?>">
        </div>

        <div class="btn">
            <input type="submit" value="submit" name="submit">
        </div>
    </form>

    <p>
        <?php
        if (isset($num1) && isset($num2)) {
            if ($num1 > $num2) {
                echo $num1 . " is greater than " . $num2;
            } else {
                echo $num2 . " is greater than " . $num1;
            }
        }
        ?>
    </p>
</body>

</html>
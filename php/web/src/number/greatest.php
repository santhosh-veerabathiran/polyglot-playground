<?php
if (isset($_GET['submit'])) {
    $num1 = (int) $_GET['num1'];
    $num2 = (int) $_GET['num2'];
    $num3 = (int) $_GET['num3'];

    if (empty($num1) || empty($num2) || empty($num3)) {
        unset($num1, $num2, $num3);
    }
} ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greatest Of Three Numbers</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <h1>Greatest Of Three Numbers</h1>
    <form>
        <div class="input">
            <label for="num1">Number 1: </label>
            <input type="text" name="num1" id="num1" value="<?php echo isset($num1) ? $num1 : ''; ?>">
        </div>

        <div class="input">
            <label for="num2">Number 2: </label>
            <input type="text" name="num2" id="num2" value="<?php echo isset($num2) ? $num2 : ''; ?>">
        </div>

        <div class="input">
            <label for="num3">Number 3: </label>
            <input type="text" name="num3" id="num3" value="<?php echo isset($num3) ? $num3 : ''; ?>">
        </div>

        <div class="btn">
            <input type="submit" value="submit" name="submit">
        </div>
    </form>

    <p>
        <?php if (isset($num1) && isset($num2) && isset($num3)) {
            if ($num1 > $num2 && $num1 > $num3) {
                echo $num1 . ' is greater than ' . $num2 . ' and ' . $num3;
            } elseif ($num2 > $num3) {
                echo $num2 . ' is greater than ' . $num1 . ' and ' . $num3;
            } else {
                echo $num3 . ' is greater than ' . $num1 . ' and ' . $num2;
            }
        } ?>
    </p>
</body>

</html>

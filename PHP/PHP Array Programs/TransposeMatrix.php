<?php
$a = "";
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $arow1 = $_POST['arow1'];
    $arow2 = $_POST['arow2'];
    $arow3 = $_POST['arow3'];

    $a = array($arow1, $arow2, $arow3);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transpose Matrix</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <h1>Transpose Matrix:</h1>
    <div class="form-container">
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
            <div class="container">
                <div class="matrix">
                    <h2>Matrix A:</h2>
                    <table>
                        <?php
                        for ($i = 0; $i < 3; $i++) {
                            echo "<tr>";
                            for ($j = 0; $j < 3; $j++) {
                                echo "<td><input type='text' name='arow" . $i + 1 . "[]' value='";
                                if ($a) {
                                    echo (string) $a[$i][$j];
                                }
                                echo "' required></td>";
                            }
                            echo "</tr>";
                        }
                        ?>
                    </table>
                </div>
                <div class="matrix">
                    <?php
                    if ($a) {
                        echo "<h2>Resultant Matrix: </h2>";
                        echo "<table>";
                        for ($i = 0; $i < count($a); $i++) {
                            echo "<tr>";
                            for ($j = 0; $j < count($a[$i]); $j++) {
                                echo "<td>" . $a[$j][$i] . "</td>";
                            }
                            echo "</tr>";
                        }
                        echo "</table>";
                    }
                    ?>
                </div>
            </div>
            <div class="container">
                <button type="submit">Get Transpose Matrix</button>
            </div>
        </form>
        <div class="container">

        </div>
    </div>
</body>

</html>
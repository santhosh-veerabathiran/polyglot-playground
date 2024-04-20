<?php
$a = "";
$b = "";
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $arow1 = $_POST['arow1'];
    $arow2 = $_POST['arow2'];
    $arow3 = $_POST['arow3'];

    $brow1 = $_POST['brow1'];
    $brow2 = $_POST['brow2'];
    $brow3 = $_POST['brow3'];

    $a = array($arow1, $arow2, $arow3);
    $b = array($brow1, $brow2, $brow3);
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Addition Matrix</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <h1>Addition Matrix:</h1>
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
                    <h2>Matrix B:</h2>
                    <table>
                        <?php
                        for ($i = 0; $i < 3; $i++) {
                            echo "<tr>";
                            for ($j = 0; $j < 3; $j++) {
                                echo "<td><input type='text' name='brow" . $i + 1 . "[]' value='";
                                if ($b) {
                                    echo (string) $b[$i][$j];
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
                                echo "<td>" . $a[$i][$j] + $b[$i][$j] . "</td>";
                            }
                            echo "</tr>";
                        }
                        echo "</table>";
                    }
                    ?>
                </div>
            </div>
            <div class="container">
                <button type="submit">Get Addition Matrix</button>
            </div>
        </form>
    </div>
</body>

</html>
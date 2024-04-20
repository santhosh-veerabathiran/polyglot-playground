<?php
$a = "";
$b = "";
$c = "";
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $arow1 = $_POST['arow1'];
    $arow2 = $_POST['arow2'];
    $arow3 = $_POST['arow3'];

    $brow1 = $_POST['brow1'];
    $brow2 = $_POST['brow2'];
    $brow3 = $_POST['brow3'];

    $a = array($arow1, $arow2, $arow3);
    $b = array($brow1, $brow2, $brow3);

    $c = array();
    for ($i = 0; $i < count($a); $i++) {
        for ($j = 0; $j < count($b[0]); $j++) {
            $c[$i][$j] = 0;
            for ($k = 0; $k < count($b); $k++) {
                $c[$i][$j] += $a[$i][$k] * $b[$k][$j];
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matrix Multiplication</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <h1>Matrix Multiplication:</h1>
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
                            for ($j = 0; $j < count($a[0]); $j++) {
                                echo "<td>" . $c[$i][$j] . "</td>";
                            }
                            echo "</tr>";
                        }
                        echo "</table>";
                    }
                    ?>
                </div>
            </div>
            <div class="container">
                <button type="submit">Get Multiplication Matrix</button>
            </div>
        </form>
    </div>
</body>

</html>
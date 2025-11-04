<?php
$a = '';
$b = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $arow1 = $_POST['arow1'];
    $arow2 = $_POST['arow2'];
    $arow3 = $_POST['arow3'];

    $brow1 = $_POST['brow1'];
    $brow2 = $_POST['brow2'];
    $brow3 = $_POST['brow3'];

    $a = [$arow1, $arow2, $arow3];
    $b = [$brow1, $brow2, $brow3];
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
        <form action="<?= htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="POST">
            <div class="container">
                <div class="matrix">
                    <h2>Matrix A:</h2>
                    <table>
                        <?php for ($i = 0; $i < 3; $i++): ?>
                            <tr>
                                <?php for ($j = 0; $j < 3; $j++): ?>
                                    <td>
                                        <input type="text" name="arow<?= $i + 1 ?>[]" value="<?= $a ? htmlspecialchars($a[$i][$j]) : '' ?>" required>
                                    </td>
                                <?php endfor; ?>
                            </tr>
                        <?php endfor; ?>
                    </table>
                </div>

                <div class="matrix">
                    <h2>Matrix B:</h2>
                    <table>
                        <?php for ($i = 0; $i < 3; $i++): ?>
                            <tr>
                                <?php for ($j = 0; $j < 3; $j++): ?>
                                    <td>
                                        <input type="text" name="brow<?= $i + 1 ?>[]" value="<?= $b ? htmlspecialchars($b[$i][$j]) : '' ?>" required>
                                    </td>
                                <?php endfor; ?>
                            </tr>
                        <?php endfor; ?>
                    </table>
                </div>

                <?php if ($a): ?>
                    <div class="matrix">
                        <h2>Resultant Matrix:</h2>
                        <table>
                            <?php for ($i = 0; $i < count($a); $i++): ?>
                                <tr>
                                    <?php for ($j = 0; $j < count($a[$i]); $j++): ?>
                                        <td><?= $a[$i][$j] + $b[$i][$j] ?></td>
                                    <?php endfor; ?>
                                </tr>
                            <?php endfor; ?>
                        </table>
                    </div>
                <?php endif; ?>
            </div>

            <div class="container">
                <button type="submit">Get Addition Matrix</button>
            </div>
        </form>
    </div>
</body>

</html>

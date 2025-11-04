<?php

require_once __DIR__ . '/../../environment.php';

$conn = mysqli_connect($databaseConfig['host'], $databaseConfig['username'], $databaseConfig['password'], $databaseConfig['database']);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

$result = $conn->query('SELECT * FROM images');
?>

<?php if ($result->num_rows > 0) { ?>
    <div class="gallery">
        <?php while ($row = $result->fetch_assoc()) { ?>
            <img src="data:image/png;base64,<?php echo $row['image']; ?>"
                width='<?php echo isset($row['width']) ? $row['width'] / 10 : 100; ?>' height='<?php echo isset($row['height'])
    ? $row['height'] / 10
    : 100; ?>'>
        <?php } ?>
    </div>
<?php } else { ?>
    <p class="status error">Image(s) not found...</p>
<?php } ?>
<br>
<hr>
<a href="upload.image.form.php">Upload Image</a>

<?php mysqli_close($conn);
?>

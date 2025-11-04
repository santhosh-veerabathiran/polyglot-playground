<!DOCTYPE html>
<html>

<head>
    <title>Image Upload</title>
</head>

<body>
    <form action="save.image.db.php" method="POST" enctype="multipart/form-data">
        <input type="file" name="image">
        <input type="submit" name="submit" value="save">
    </form>
    <?php if (isset($_GET['status'])) {
        echo $_GET['status'];
    } ?>
    <br>
    <hr>
    <a href="view.image.php">View</a>
</body>

</html>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Image name</title>
</head>

<body>
    <form action="uploadimagedb.php" method="POST" enctype="multipart/form-data">
        <input type="file" name="image"><br><br>
        <input type="submit" name="submit">
    </form>
    <hr>
    <a href="viewimage.php">View Image</a>
</body>

</html>
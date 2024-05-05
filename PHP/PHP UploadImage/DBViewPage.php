<?php
    $sname = "localhost";
    $uname = "root";
    $password = "";
    $dbname = "mydatabase1";
    
    $con = mysqli_connect($sname,$uname,$password,$dbname);
    
    if(!$con) {
        die("Connection Failed Try Again");
    }

    $result = $con -> query("SELECT * from images");
?>

<?php if($result -> num_rows > 0) { ?>
 <div class="gallery">
    <?php while($row = $result -> fetch_assoc()) { 
        $image =$row['image']; ?>
        <img src="<?php echo $image; ?>" width='100' height='100'>
        <?php
    }
    ?>
    </div>
<?php } else{ ?>
    <p class="status error">Image(s) not found...</p>
<?php } ?>
<br><hr>
<a href="dbuploadimage.php">Upload Image</a>
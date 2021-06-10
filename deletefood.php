<?php
include("./php/cn.php");
$id = $_GET["id"];
$menuId = $_GET["menu"];

$insertar = "DELETE FROM alimentos WHERE id ='$id'";


$resultado = mysqli_query($con, $insertar);

if ($resultado) {
    header("Location: menu.php?id=$menuId");
} else {
    echo "<script>
				window.history.go(-1)
			</script>";
}

?>

</body>

</html>
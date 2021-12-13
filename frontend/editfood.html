<?php
include("./php/cn.php");
$menuId = $_GET["menuid"];
$id = $_GET["vendedor"];
$alimentoId = $_GET["id"];
$nombreAlimento = $_GET["nombre"];
$precioAlimento = $_GET["precio"];
$descAlimento = $_GET["desc"];
$imagenAlimento = $_GET["imagen"];
$queryEtiquetas = "SELECT * FROM etiquetas";

// $menuName = mysqli_query($con, "SELECT nombre FROM menus WHERE vendedor_id='$id'")->fetch_object()->nombre;
// $menuId = mysqli_query($con, "SELECT id FROM menus WHERE vendedor_id='$id'")->fetch_object()->id;

// $alimentos = "SELECT * FROM alimentos WHERE menu_id = $menuId";

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="icon" type="image/png" href="./assets/img/logo1.png" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./css/style.css" />
    <link rel="stylesheet" href="./css/crud.css" />
    <link rel="stylesheet" href="./css/formsDB.css" />
    <title>Kobi</title>
</head>

<body>
    <header>
        <div class="header-container">
            <a href="./index.php" class="header--logo">
                <img src="./assets/img/logo1.png" alt="" />
            </a>
            <h2>¿Qué vamos a comer hoy?</h2>
        </div>
    </header>

    <main>

        <section class="main-form-container">
            <div class="main-form">

                <h2>Editar Alimento</h2>

                <form action="#" method="POST" enctype="multipart/form-data">

                    <label for="nombrePrecio" class="nombrePrecio">
                        <input value="<?php echo $nombreAlimento; ?>" type="text" name="nombre" class="nombre-input input" placeholder="Nombre del alimento" required />

                        <input value="<?php echo $precioAlimento; ?>" type="number" name="precio" placeholder="Precio" class="precio-input input" required />
                    </label>

                    <label for="desc" class="desc">
                        <textarea name="desc" class="desc-input input" placeholder="Descripcion del alimento" required><?php echo $descAlimento; ?></textarea>

                    </label>

                    <label for="status">

                        <select name="estatus" class="status-input input" required>
                            <option value="" selected disabled hidden>Seleccione</option>
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </select>

                    </label>

                    <label>
                        <select name="etiqueta" class="status-input input" required>
                            <option value="" selected disabled hidden>Seleccione etiqueta</option>

                            <!-- Codigo PHP mostrar datos de la BD -->
                            <?php
                            $resultadoQuery = mysqli_query($con, $queryEtiquetas);

                            while ($row = mysqli_fetch_assoc($resultadoQuery)) {
                                echo "<option value=" . $row["id"] . ">" . $row["nombre_etiqueta"] . "</option>";
                            }
                            mysqli_free_result($resultadoQuery);
                            ?>

                        </select>
                    </label>

                    <label for="ImageFile">
                        <div class="custom-file">
                            <label class="image-label" for="ImageFile">Seleccionar Imagen</label>
                            <figure>
                                <img id="foodImage" src="<?php echo $imagenAlimento; ?>" alt="" width="100%" />
                            </figure>
                            <input name="imagen" type="file" class="file-input btn" id="ImageFile"/>
                        </div>
                    </label>

                    <label for="botones" class="boton">
                        <input type="submit" class="submit btn" />
                    </label>

                </form>
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-container">
            <a href="#" class="footer--logo">
                <img src="./assets/img/logo1.png" alt="" />
            </a>
            <h2>Kobi</h2>
        </div>
    </footer>

    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

    <!-- Script para previsualizar imagen -->
    <script>
        const $inputImage = document.getElementById('ImageFile')
        const $image = document.getElementById('foodImage')

        $inputImage.addEventListener("change", function() {
            console.log(this.files);
            var files = this.files;
            var imgCodified = URL.createObjectURL(files[0]);

            $image.setAttribute("src", imgCodified)
        });
    </script>


    <?php
    if (
        isset($_POST['nombre']) &&
        isset($_POST['precio']) &&
        isset($_POST['desc']) &&
        isset($_POST['etiqueta']) &&
        isset($_POST['estatus'])
    ) {
        $nombre = $_POST['nombre'];
        $precio = $_POST['precio'];
        $desc = $_POST['desc'];
        $estatus = $_POST['estatus'];
        $img = $_FILES["imagen"]['name'];

        $etiqueta = $_POST['etiqueta'];

        if ($img) {

            // Url que se guarda en la BD
            $imgURL = "assets/img/img_alimentos/$menuId" . "_$img";

            // Ruta para guardar la imagen
            $target_Path = "./assets/img/img_alimentos/";

            // Codigo para subir la imagen
            $target_Path = $target_Path . basename("$menuId" . "_$img");
            move_uploaded_file($_FILES['imagen']['tmp_name'], $target_Path);


            $insertar = "UPDATE alimentos SET nombre='$nombre', precio='$precio', imagen='$imgURL', descripcion='$desc', estatus='$estatus', menu_id='$menuId' WHERE id=$alimentoId";
        }else{
            $insertar = "UPDATE alimentos SET nombre='$nombre', precio='$precio', descripcion='$desc', estatus='$estatus', menu_id='$menuId' WHERE id=$alimentoId";
        }

        $resultado = mysqli_query($con, $insertar);

        if ($resultado) {

            $registrarEtiqueta = "UPDATE alimentos_etiquetas SET etiqueta_id='$etiqueta' WHERE alimento_id=$alimentoId";

            $resultadoEtiqueta = mysqli_query($con, $registrarEtiqueta);

            echo "<script>
			swal('Correcto', 'Datos guardados exitosamente', 'success')
			const boton = document.querySelector('.swal-button')
			boton.addEventListener('click',()=>{
				window.location = './menu.php?id=$id'
			})
			</script>";
        } else {
            echo "<script>
			swal('Error', 'Datos no válidos', 'error')
			const boton = document.querySelector('.swal-button')
			boton.addEventListener('click',()=>{
				window.location = './newfood.php?id=$menuId'
			})
			</script>";
        }
    }
    ?>

</body>

</html>
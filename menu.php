<?php
include("./php/cn.php");
$id = $_GET["id"];
$menuName = mysqli_query($con, "SELECT nombre FROM menus WHERE vendedor_id='$id'")->fetch_object()->nombre;
$menuId = mysqli_query($con, "SELECT id FROM menus WHERE vendedor_id='$id'")->fetch_object()->id;

$alimentos = "SELECT * FROM alimentos WHERE menu_id = $menuId";

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


        <section class="main-table-container">
            <div class="main-table">
                <div class="main-table--header">
                    <!-- php -->
                    <h2><?php echo "$menuName"; ?></h2>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th class="nombre-alimento">Alimento</th>
                            <th class="precio-alimento">Precio</th>
                            <th class="descripcion-alimento">Descripción</th>
                            <th class="estado-alimento">Estado</th>
                            <!-- <th>Imagen</th> -->
                            <th class="acciones-alimento">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        <!-- PHP -->
                        <?php
                        $resultadoQuery = mysqli_query($con, $alimentos);
                        while ($row = mysqli_fetch_assoc($resultadoQuery)) {
                        ?>
                            <tr>
                                <td class="nombre-alimento"><?php echo $row["nombre"]; ?></td>
                                <td class="precio-alimento"><?php echo $row["precio"]; ?></td>
                                <td class="descripcion-alimento"><?php echo $row["descripcion"]; ?></td>
                                <td class="estado-alimento"><?php echo $row["estatus"]; ?></td>
                                <td class="acciones-alimento">
                                    <a href="">Editar</a>
                                    <a href="">Eliminar</a>
                                </td>
                            </tr>
                        <?php
                        }
                        mysqli_free_result($resultadoQuery);
                        ?>                        
                        <!-- /PHP -->
                        
                    </tbody>
                </table>
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
</body>

</html>
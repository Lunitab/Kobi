<?php
include("./php/cn.php");
$etiquetas = "SELECT * FROM etiquetas;";
$menusPopular = "SELECT * FROM menus WHERE tendencia = 'popular'";
$menusNuevo = "SELECT * FROM menus WHERE tendencia = 'nuevo'";
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
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css" />
    <link rel="stylesheet" href="./css/desktop.css" media="(min-width: 768px)" />
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
        <!-- Banner -->
        <section class="main-banner">
            <img class="banner-background" src="./assets/img/food1.jpg" alt="imagen burrito" />
            <div class="main-container-text">
                <h1>Kobi</h1>
                <p class="banner-info">
                    Kobi te permite vender variedad de alimentos distintos dentro de las instalaciones donde te encuentres, para tener un manejo completo de tus pedidos, quien
                    quiere comprar y mostrar lo que tienes que ofrecer.
                </p>

                <div class="banner-button">
                    <a class="button" href="./register.php">Quiero ser vendedor</a>
                </div>

                <div class="banner-login">
                    <p>¿Ya eres vendedor?</p> <a href="./login.php">Inicia sesión</a>
                </div>
            </div>
        </section>
        <!-- /Banner -->

        <section class="main-categories--slider">

            <?php

            $resultadoEtiquetas = mysqli_query($con, $etiquetas);
            while ($row = mysqli_fetch_assoc($resultadoEtiquetas)) {
            ?>

                <article class="categories--item">
                    <h4><?php echo $row["nombre_etiqueta"]; ?></h4>
                </article>

            <?php
            }
            mysqli_free_result($resultadoEtiquetas);
            ?>

        </section>

        <hr class="categories-hr">

        <section class="main-food-detail">
            <!-- Populares section -->
            <section class="food--container">
                <!-- Title -->
                <div class="food-detail--title">
                    <h2>Populares</h2>
                    <p>Los más pedidos</p>
                </div>
                <!-- /Title -->

                <!-- Menu cards -->
                <section class="food-cards--container">
                    <!-- PHP MENU -->
                    <?php
                    $resultadoMenusPopu = mysqli_query($con, $menusPopular);
                    while ($row = mysqli_fetch_assoc($resultadoMenusPopu)) {
                    ?>
                        <article class="food-detail--card">
                            <a href="./food.php?id=<?php echo $row["vendedor_id"]; ?>&nombreMenu=<?php echo $row["nombre"];?>&img=<?php echo $row["imagen"];?>&menuID=<?php echo $row["id"];?>">
                                <figure>
                                    <img src=<?php echo $row["imagen"]; ?> alt="">
                                </figure>
                            </a>
                            <div class="food--card-text">
                                <h3><?php echo $row["nombre"]; ?></h3>
                                <p><?php echo $row["estatus"]; ?></p>
                            </div>
                        </article>

                    <?php
                    }
                    mysqli_free_result($resultadoMenusPopu);
                    ?>
                    <!-- /PHP MENU -->

                </section>
                <!-- /Item cards -->
            </section>
            <!-- /Populares section -->

            <!-- Nuevos section -->
            <section class="food--container">
                <!-- Title -->
                <div class="food-detail--title">
                    <h2>Nuevos</h2>
                    <p>Sé uno de los primeros en apoyarlos</p>
                </div>
                <!-- /Title -->

                <!-- Item cards -->
                <section class="food-cards--container">

                    <!-- PHP MENU -->
                    <?php
                    $resultadoMenusNuevos = mysqli_query($con, $menusNuevo);
                    while ($row = mysqli_fetch_assoc($resultadoMenusNuevos)) {
                    ?>
                        <article class="food-detail--card">
                            <a href="./food.php?id=<?php echo $row["vendedor_id"];?>&nombreMenu=<?php echo $row["nombre"];?>&img=<?php echo $row["imagen"];?>&menuID=<?php echo $row["id"];?>">
                                <figure>
                                    <img src=<?php echo $row["imagen"]; ?> alt="">
                                </figure>
                            </a>
                            <div class="food--card-text">
                                <h3><?php echo $row["nombre"]; ?></h3>
                                <p><?php echo $row["estatus"]; ?></p>
                            </div>
                        </article>

                    <?php
                    }
                    mysqli_free_result($resultadoMenusNuevos);
                    ?>
                    <!-- /PHP MENU -->

                </section>
                <!-- /Item cards -->
            </section>
            <!-- /Nuevos section -->

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
</body>

</html>
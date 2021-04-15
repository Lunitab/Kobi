<?php
include("./php/cn.php");
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
    <link rel="stylesheet" href="./css/form.css" />
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
        <img src="./assets/img/food1.jpg" alt="bg-image">
        <section class="main">
            <h1 class="main-title">Login</h1>
            <section class="main-login">
                <span class="main-login-text">Ingresa para iniciar tu sesión</span>
                
                <form action="#" method="POST" class="main-login-form">
                    <label for="datos" class="datos">
                        <input type="email" name="email" class="email-input" placeholder="Email" required />

                        <input type="password" name="password" class="pass-input" placeholder="Contraseña" required />
                    </label>
                    <label for="botones" for="botones" class="boton">
                        <!-- <div class="div-checkbox">
                            <input type="checkbox" class="checkbox">
                            <span><strong>Remember Me</strong></span>
                        </div> -->
                        <input type="submit" class="submit" />
                    </label>
                </form>
            </section>
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

    <?php
    if (isset($_POST["email"]) && isset($_POST["password"])) {

        $email = $_POST["email"];
        $password = $_POST["password"];

        $validar = "SELECT * FROM vendedores WHERE email = '$email' AND password='$password'";
        $resultado = mysqli_query($con, $validar);

        if ($resultado && mysqli_num_rows($resultado)!=0) {
            echo "<script>
                window.location = './index.php' 
                </script>";
        } else {
            echo "<script>
                swal('Error', 'datos no válidos', 'error')
                const boton = document.querySelector('.swal-button')
                boton.addEventListener('click',()=>{
                    window.location = './login.php'
                })
                </script>";
        }
    }

    ?>

</body>

</html>
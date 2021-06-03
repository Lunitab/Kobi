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
            <h1 class="main-title">Registrate</h1>
            <section class="main-login">
                <span class="main-login-text">Registra tus datos</span>
                <form action="#" method="POST" class="main-login-form">
                    <label for="datos" class="datos">
                        <input name="name" type="text" placeholder="Nombre" required />
                        <input name="nickname" type="text" placeholder="Apodo" required />
                        <input name="menu" type="text" placeholder="Nombre de tu tienda" required />
                        <input name="email" type="email" placeholder="Email" required />
                        <input name="telefono" type="tel" placeholder="Teléfono" required />
                        <input name="password" id="password" type="password" placeholder="Contraseña" required />
                        <input name="password-repeat" id="confirm_password" type="password" placeholder="Repite tu contraseña" required />
                    </label>

                    <label for="botones" for="botones" class="boton">
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
</body>

<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>


<script>
    const $password = document.getElementById("password"),
        $confirm_password = document.getElementById("confirm_password");

    function validatePassword() {
        if (password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Las contraseñas no coinciden");
        } else {
            confirm_password.setCustomValidity('');
        }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
</script>

<?php

if (isset($_POST["name"]) && isset($_POST["nickname"]) && isset($_POST["menu"]) && isset($_POST["email"]) && isset($_POST["telefono"]) && isset($_POST["password"])) {
    $nombre = $_POST["name"];
    $nickname = $_POST["nickname"];
    $nombre_menu = $_POST["menu"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $password = $_POST["password"];

    $registrarVendedor = "INSERT INTO vendedores(login, password, nickname, email, telefono) VALUES ('$nombre', '$password', '$nickname', '$email', '$telefono')";

    $resultado = mysqli_query($con, $registrarVendedor);

    if($resultado){

        $idVendedor = mysqli_query($con, "SELECT id FROM vendedores WHERE email='$email'")->fetch_object()->id;

        $registrarMenu = "INSERT INTO menus(nombre, vendedor_id) VALUES ('$nombre_menu', '$idVendedor')";

        $resultadoMenu = mysqli_query($con, $registrarMenu);

        echo "<script>
        swal('Hecho', 'Registro exitoso', 'success')
        const boton = document.querySelector('.swal-button')
        boton.addEventListener('click',()=>{
            window.location = './login.php';
        })        
        </script>";

    } else {
        echo "<script>
        swal('Error', 'No se pudo registrar. Comprueba que el correo no este en uso', 'error')
        const boton = document.querySelector('.swal-button')
        boton.addEventListener('click',()=>{
            window.location = './register.php'
        })
        </script>";
    }


    
}


?>

</html>
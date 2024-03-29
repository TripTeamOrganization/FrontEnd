const contenedor = document.querySelector('#contenedor');
document.querySelector('#boton-menu').addEventListener('click', () => {
    contenedor.classList.toggle('active');
});

function validarFormulario() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errores = 0;

    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
        document.getElementById("emailError").style.display = "block";
        errores = 1;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").style.display = "block";
        errores = 1;
    }

    if (errores === 0) {
        const userData = {
            email: email,
            password: password
        };

        console.log(JSON.stringify(userData, null, 2));
    }
}

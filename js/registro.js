const contenedor = document.querySelector('#contenedor');
document.querySelector('#boton-menu').addEventListener('click', () => {
    contenedor.classList.toggle('active');
});

function validarFormulario() {

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var dni = document.getElementById("dni").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var telefono = document.getElementById("telefono").value;
    var errores = 0;


    document.getElementById("nombreError").style.display = "none";
    document.getElementById("apellidosError").style.display = "none";
    document.getElementById("dniError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("telefonoError").style.display = "none";

    if (nombre.length < 3 || nombre.length > 15) {
        document.getElementById("nombreError").style.display = "block";
        errores = 1;
    }
    if (apellidos.length < 3 || apellidos.length > 15) {
        document.getElementById("apellidosError").style.display = "block";
        errores = 1;
    }
    var dniRegex = /^\d{8}$/;
    if (!dni.match(dniRegex)) {
        document.getElementById("dniError").style.display = "block";
        errores = 1;
    }
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
        document.getElementById("emailError").style.display = "block";
        errores = 1;
    }
    if (password.length < 8) {
        document.getElementById("passwordError").style.display = "block";
        errores = 1;
    }
    if (telefono !== "") {
        var telefonoRegex = /^\d{9}$/;
        if (!telefono.match(telefonoRegex)) {
            document.getElementById("telefonoError").style.display = "block";
            errores = 1;
        }
    }
    if (errores === 0) {
        const userData = {
            nombre: nombre,
            apellidos: apellidos,
            dni: dni,
            email: email,
            password: password,
            telefono: telefono
        };
        console.log(JSON.stringify(userData, null, 2));
    }
}



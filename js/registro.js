const contenedor = document.querySelector('#contenedor');
document.querySelector('#boton-menu').addEventListener('click', () => {
    contenedor.classList.toggle('active');
});

function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var dni = document.getElementById("dni").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var telefono = document.getElementById("telefono").value;
    var errores = 0;

    // Limpiar mensajes de error previos
    document.getElementById("nombreError").style.display = "none";
    document.getElementById("apellidosError").style.display = "none";
    document.getElementById("dniError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("telefonoError").style.display = "none";

    // Validar nombre (entre 3 y 15 caracteres)
    if (nombre.length < 3 || nombre.length > 15) {
        document.getElementById("nombreError").style.display = "block";
        errores = 1;
    }

    // Validar apellidos (entre 3 y 15 caracteres)
    if (apellidos.length < 3 || apellidos.length > 15) {
        document.getElementById("apellidosError").style.display = "block";
        errores = 1;
    }

    // Validar DNI (8 dígitos numéricos)
    var dniRegex = /^\d{8}$/;
    if (!dni.match(dniRegex)) {
        document.getElementById("dniError").style.display = "block";
        errores = 1;
    }

    // Validar correo electrónico (formato básico)
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
        document.getElementById("emailError").style.display = "block";
        errores = 1;
    }

    // Validar contraseña (mínimo 8 caracteres)
    if (password.length < 8) {
        document.getElementById("passwordError").style.display = "block";
        errores = 1;
    }

    // Validar número de teléfono (opcional)
    if (telefono !== "") {
        var telefonoRegex = /^\d{9}$/; // Ejemplo: 9 dígitos numéricos
        if (!telefono.match(telefonoRegex)) {
            document.getElementById("telefonoError").style.display = "block";
            errores = 1;
        }
    }

    // Si no hay errores, hacer un console.log
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

// Resto del código...

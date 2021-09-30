// functions.

//---------------------- username  ---------------------

function checkUsername(value) {
    // validar el campo nombre de usuario, Este campo debe contener caracteres alfanumericos, una longitud no mayor a 30 digitosy debe de requerirsele al usuario de manera obligatoia, es decir, no puede dejarse vacio.
    const expresion = /^[a-zA-Z0-9\_\-]{4,30}$/;
    return expresion.test(value)
}

//---------------------- mail  ---------------------
function checkCorreo(value) {
    // validar el campo correo, este campo debe presentar la estructura de un correo, incluir @ seguido del dominio del correo y el campo no puede estar vacio.
    const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/;
    return expresion.test(value) 
}

//---------------------- password  ---------------------

function checkContrasena(value) {
    // validacion de la contraseña, en donde el usuario deba de ingresar por lo menos una letra mayuscula, una minuscula, un numero y con una longitud mayor o igual a 8 digitos. este campo no se puede dejar vacio.
    const expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    return expresion.test(value)
}

//---------------------- Confirm password  ---------------------

function checkConfirmContrasena(value1, value2) {
    // validar que el campo confirma la contraseña.
    let estado;
    if (value1 == value2) {
        estado = true;
    } else {
        estado = false;
    }
    return estado 
}

// ------- confirm all -----------
const nombre = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const comfirmPassword = document.getElementById("comfirm-password");
const form = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e =>{
    e.preventDefault()
    let warnings = "";
    let enter = false;
    if (!checkUsername(nombre.value)) {
        warnings += "El nombre no es Valido <br>"
        enter = true;
    }

    if (!checkCorreo(email.value)) {
        warnings += `El email no es válido <br>`
        enter = true
    }

    if (!checkContrasena(password.value)) {
        warnings += `La contraseña es inválida <br>`
        enter = true
    }

    if (!checkConfirmContrasena(password.value, comfirmPassword.value)) {
        warnings += `Las contraseñas no coinciden <br>`
        enter = true
    }
    if (enter) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado<br>Registro Exitoso!";
        nombre.value = "";
        email.value = "";
        password.value = "";
        comfirmPassword.value = "";
    }
});


//---- aqui desplegamos la ejecucion.

// --------- module.exports ---- 
//module.exports = { checkUsername, checkCorreo, checkContrasena, checkConfirmContrasena }

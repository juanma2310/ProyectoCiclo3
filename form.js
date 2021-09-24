// ---------------------- Logica de validacion de campos  del registro. ---------------------
const userRelExp = /^\w{1,30}$/;
const emailRelExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/
const passwordRelExp = /^(?=\w*\d)(?=\w*[A-Z])\S{8,}$/;
// functions.

//---------------------- username  ---------------------

function checkUsername(value) {
// validar el campo nombre de usuario, Este campo debe contener caracteres alfanumericos, una longitud no mayor a 30 digitosy debe de requerirsele al usuario de manera obligatoia, es decir, no puede dejarse vacio.
const test = userRelExp.test(value.value);
    var errorSpan = document.getElementById("formError1");
if (!test){ 
    errorSpan.innerHTML = 'Este campo es obligatorio debe contener caracteres alfanumericos y la longitud no debe ser mayor a 30 digitos';
    return false;}
    return true;
}


//---------------------- mail  ---------------------
function checkCorreo(value) {
// validar el campo correo, este campo debe presentar la estructura de un correo, incluir @ seguido del dominio del correo y el campo no puede estar vacio.
    const test = emailRelExp.test(value)
    var errorSpan = document.getElementById("formError2");
    if (!test) { 
        errorSpan.innerHTML = "este campo debe presentar la estructura de un correo, incluir @ seguido del dominio del correo y el campo no puede estar vacio.";
        return false; }
    if (value.value === "") {
        alert("esta vacio")
        return false;
}
return true;
}


//---------------------- password  ---------------------

function checkContrasena(value) {
// validacion de la contraseña, en donde el usuario deba de ingresar por lo menos una letra mayuscula, una minuscula, un numero y con una longitud mayor o igual a 8 digitos. este campo no se puede dejar vacio.
    const test = passwordRelExp.test(value)
    var errorSpan = document.getElementById("formError3");
    if (!test) { 
        errorSpan.innerHTML = "Contraseña insegura, debe tener almenos una mayuscula, una minuscula, un numero y una longitod >= a 8 digitos";
        return false; }
    return true;
}



//---------------------- Confirm password  ---------------------

function checkConfirmContrasena(value1,value2) {
// validar que el campo confirma la contraseña.
    var errorSpan = document.getElementById("formError4");
    const test = passwordRelExp.test(value1)
    const test2 = passwordRelExp.test(value2)
    if (!test) {
        errorSpan.innerHTML = "Contraseña insegura, debe tener almenos una mayuscula, una minuscula, un numero y una longitod >= a 8 digitos";
        return false;
    }
    if (!test2) {
        errorSpan.innerHTML = "Contraseña insegura, debe tener almenos una mayuscula, una minuscula, un numero y una longitod >= a 8 digitos";
        return false;
    }
    if(value1.value!==value2.value){
        errorSpan.innerHTML = "Error, las contraseñas no coinciden";
        return false;}
    
        return true;
}


// ------- confirm all -----------

function checkForm() {
    nombre = document.getElementById("username");
    email = document.getElementById("email");
    password = document.getElementById("password");
    comfirmPassword = document.getElementById("comfirm-password");
   
    a = checkUsername(nombre);
    b = checkCorreo(email);
    c = checkContrasena(password);
    d = checkConfirmContrasena(password,comfirmPassword);
    if ( a && b && c && d){
        alert("all ok")
        return true;
    }
}

//---- aqui desplegamos la ejecucion.

// --------- module.exports ---- 
module.exports = { checkUsername, checkCorreo, checkContrasena, checkConfirmContrasena}
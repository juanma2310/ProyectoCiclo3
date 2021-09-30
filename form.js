
const expresiones = {
	username: /^[a-zA-Z0-9\_\-]{4,30}$/, // Letras, numeros, guion y guion_bajo
	password: /^.[a-zA-Z0-9]+\d+\w{a-z}+\w{A-Z}/, // 8 a 30 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/,
	
}

function checkUsername(valor){
    let estado;
    if(expresiones.username.test(valor)){
        estado=true;
    }else {
        estado=false
    }
    return estado
}

function checkCorreo(valor){
    let estado;
    if(expresiones.correo.test(valor)){
        estado=true;
    }else {
        estado=false
    }
    return estado
}

function checkContrasena(valor){
    let estado;
    if(expresiones.password.test(valor)){
        estado=true;
    }else {
        estado=false
    }
    return estado
}

function checkConfirmContrasena(valor1, valor2){
    let estado;
    if(expresiones.password.test(valor1) == expresiones.password.test(valor2)){
        estado=true;
    }else {
        estado=false
    }
    return estado
}


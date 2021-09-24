
function checkUsername (valor){
    let estado;
    const expresion = /^[a-zA-Z0-9\_\-]{4,30}$/;
    if(expresion.test(valor)){
        estado = true;
    } else {
        estado = false;
    }
    return estado
}

function checkCorreo (valor){
    let estado;
    const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/;
    if(expresion.test(valor)){
        estado = true;
    } else {
        estado = false;
    }
    return estado
}

function checkContrasena (valor){
    let estado;
    const expresion = /^.[a-zA-Z0-9]+\d+\w{a-z}+\w{A-Z}/;
    if(expresion.test(valor)){
        estado = true;
    } else {
        estado = false;
    }
    return estado
}

function checkConfirmContrasena (valor1, valor2){
    let estado;
    if(valor1 == valor2){
        estado = true;
    } else {
        estado = false;
    }
    return estado
}

module.exports = {checkUsername, checkCorreo, checkContrasena, checkConfirmContrasena}

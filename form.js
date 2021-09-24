
function checkUsername (valor){
    const expresion = /^[a-zA-Z0-9\_\-]{4,30}$/;
    return expresion.test(valor)
}

function checkCorreo (valor){
    const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/;
    return expresion.test(valor)
}

function checkContrasena (valor){
    const expresion = /^.[a-zA-Z0-9]+\d+\w{a-z}+\w{A-Z}/;
    return expresion.test(valor)
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

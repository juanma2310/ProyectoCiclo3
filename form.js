const user = document.getElementById("username")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const passconf = document.getElementById("confirm-password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    
    checkUsername(user.value)

    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br><br>`
        entrar = true
    }

    if(pass.value.length < 8){
        warnings += `La contraseña es inválida <br><br>`
        entrar = true
    }

    if(pass.value != passconf.value){
        warnings += `Las contraseñas no coinciden <br><br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    } else{
        parrafo.innerHTML = "Enviado"
        user.value = ""
        email.value = ""
        pass.value = ""
        passconf.value = ""
    }
})

function checkUsername (valor){
    const expresion = /^[a-zA-Z0-9\_\-]{4,30}$/;
    if(expresion.test(valor)){
        warnings += `El usuario no es válido <br><br>`
        entrar = true
    }
    
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
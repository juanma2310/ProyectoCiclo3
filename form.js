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
    if(user.value.length < 6){
        warnings += `El nombre no es válido <br>`
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`
        entrar = true
    }

    if(pass.value.length < 8){
        warnings += `La contraseña inválida <br>`
        entrar = true
    }

    if(pass.value != passconf.value){
        warnings += `Las contraseñas no coinciden <br>`
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
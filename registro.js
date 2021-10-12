var registros = [];
function agregarRegistro() {
    var nombre;
    u = document.getElementById('username');
    var email
    e = document.getElementById('email');
    var password 
    p = document.getElementById('password');

    if (u != null){
        nombre = u.value;
    } else {
        nombre = '';
    }

    if (e != null){
        email = e.value;
    } else {
        email = '';
    }

    if (p != null){
        password = p.value
    } else {
        password = '';
    }

    var individualReg = [nombre,email,password];
    registros.push(individualReg);
};

function obtenerUsername(array) {
   var arrayOfNames = []; 
    
    if (array != null){
        for (var i = 0; i < array.lenght; i++){
            
            if (/\d/.test(array[i][0])){
                arrayOfNames.push(array[i])
            }
        }
    }
    return arrayOfNames;
    
    
};

function filtrarCorreo(array) {
    let arrayOfEmails = [];
    /*registros.forEach((value) => {
        const EmailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/;
        if (EmailRegex.test(value[1])){
        arrayOfEmails.push(value[1]);
        };
    });*/
    arrayOfEmails.push("gol@hotmail.com");
    console.log(arrayOfEmails);
    return arrayOfEmails;
};

module.exports = { registros, agregarRegistro, obtenerUsername, filtrarCorreo }

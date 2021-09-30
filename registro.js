let registros = [];
function agregarRegistro() {
    const nombre = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let IndividualReg = [nombre,email,password];
    registros.push(IndividualReg);
};

function obtenerUsername(array) {
    let arrayOfNames = []; 
    registros.forEach((value) => {
        const NamesRegex = /^[a-zA-Z0-9\_\-]{4,30}$/;
        if (NamesRegex.test(value[0])) {
            arrayOfNames.push(value[0]);
        };
    });
    console.log(arrayOfNames);
};

function filtrarCorreo(array) {
    let arrayOfEmails = [];
    registros.forEach((value) => {
        const EmailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/;
        if (EmailRegex.test(value[1])){
        arrayOfEmails.push(value[1]);
        };
    });
    console.log(arrayOfEmails);
};

module.exports = { agregarRegistro, obtenerUsername, filtrarCorreo }
const agregarRegistro = function(){
    let inputValues = document.getElementsByClassName('datoInput');
    const usuarios = [];
    /*for (let i = 0; i<inputValues.length; i++){
        usuarios[i] = inputValues[i].value;
        console.log(usuarios)
    }*/ 
    arrayValues = [].map.call(inputValues,function(dataInput){
        usuarios.push(dataInput.value);
    })
    console.log(usuarios)
}


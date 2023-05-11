function apostar(){
    //Calcular Numero Aleatorio Del 1-10
    var a=Math.round(Math.random()*10); //Aleatorio 1/10
    document.getElementById("resultado").value=a;
    var b=document.getElementById("apostado").value;

    //Validar Si Acerto En El Numero
    if(a==b){
        document.getElementById("salida").value="Gano Apuesta";
    }else{
        document.getElementById("salida").value="Perdio Apuesta";
    }
}

//Limpiar
function cancel(){
    document.getElementById("apostado").value="";
    document.getElementById("resultado").value="";
    document.getElementById("salida").value="";
}
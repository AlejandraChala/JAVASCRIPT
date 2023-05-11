function limpiar(){
    document.getElementById("Nota 1").value=""; //Borrar Todo En Cuadro De Texto
    document.getElementById("Nota 2").value=""; //Borrar Todo En Cuadro De Texto
    document.getElementById("Nota 3").value=""; //Borrar Todo En Cuadro De Texto
    document.getElementById("Definitiva").value=""; //Borrar Todo En Cuadro De Texto
}

function promedio(){
    var n1=document.getElementById("Nota 1").value;//Asigna Notas Por Teclado 
    var n2=document.getElementById("Nota 2").value;//Asigna Notas Por Teclado 
    var n3=document.getElementById("Nota 3").value;//Asigna Notas Por Teclado
    
    //Calcular Definitiva
    var Definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;//Funcion Promedio

    //Colocar Nota Definitiva En Formulario
    document.getElementById("Definitiva").value=Definitiva.toFixed(2);
}
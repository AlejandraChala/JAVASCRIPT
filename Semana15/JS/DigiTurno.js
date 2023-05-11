function prefer(){
    let num=1; //Numero Inicial Del Turno Preferenciales
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("Ingrese Nombre De Usuario");
        if(nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO: " + " " +nomuser + "\n" + "SU TURNO ES: " + " " + "E" +n+ "\n"+ "ESPERE SU LLAMADO... ");
            num++; //Incrementa Turno
        }else{
            alert("ERROR.. NO HAY DATOS REGISTRADOS");
            break;
        }
    }
}

function user(){
    let num=1; //Numero Inicial Del Turno Generales
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("Ingrese Nombre De Usuario");
        if(nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO: " + " " +nomuser + "\n" + "SU TURNO ES: " + " " + "A" +n+ "\n"+ "ESPERE SU LLAMADO... ");
            num++; //Incrementa Turno
        }else{
            alert("ERROR.. NO HAY DATOS REGISTRADOS");
            break;
        }
    }
}


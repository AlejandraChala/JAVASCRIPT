let smlv=parseFloat(prompt("Ingrese Salario Minimo Legal Vigente 2023"));
let subTte=parseFloat(prompt("Ingrese Subsidio Transporte 2023"));

function liquidiar(){

    //SUELDO BASE
    let n1=document.getElementById("salario").value; //Bajar Informacion Ingresada Del Formulario Salario.
    let n2=document.getElementById("dias").value; //Bajar Informacion Ingresada Del Formulario Dias Trabajados.
    Sueldo=parseInt(n1)/30*parseInt(n2);
    document.getElementById("basico").value=Sueldo.toFixed(0); //Subir Sueldo Basico Al Formulario.

    //SUBSIDIO TRANSPORTE
    if(n1>=2*smlv){
        subsidiot=0; //No Se Le Otorga Si Excede 2SMLV
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }else{
        subsidiot=subTte/30*parseInt(n2);
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }

    //RECARGO NOCTURNO
    var nhrn=document.getElementById("hrn").value;
    let vhrn=n1/240*nhrn*1.35; //Valor Recargo Nocturno $$
    document.getElementById("totrecn").value=vhrn.toFixed(0);

    //TOTAL DEVENGADO
    document.getElementById("totaldev").value=(parseFloat(document.getElementById('basico').value)+parseFloat(document.getElementById('subsidio').value)+parseFloat(document.getElementById('bonif').value)+parseFloat(document.getElementById('totrecn').value)|| 0).toFixed(0);

    //
    let totaldevo=document.getElementById("totaldev").value;

    //SECCION DE LIQUIDACION DE DEDUCCIONES

    //Eps y Pension
    let eps00=(totaldevo-subsidiot)*0.04; //EPS EMPLEADO
    let pen00=(totaldevo-subsidiot)*0.04; //PENSION EMPLEADO
    document.getElementById("eps").value=eps00.toFixed(0);
    document.getElementById("pension").value=pen00.toFixed(0);

    //FONDO DE SOLIDARIDAD
    let fondo=0;
    if(n1>=4*smlv){
        let fondo=totaldevo*0.01; //Calcular Fondo Solidaridad
        document.getElementById("fondos").value=fondo.toFixed(0);
    }else{
        document.getElementById("fondos").value=fondo.toFixed(0);
    }

    //PRESTAMO
    let presta=document.getElementById("prestam").value;
    
    //TOTAL DEDUCCIONES
    document.getElementById("totaldedu").value = (parseFloat(document.getElementById('fondos').value) + parseFloat(document.getElementById('prestam').value) + parseFloat(document.getElementById('eps').value) + parseFloat(document.getElementById('pension').value) || 0).toFixed(0);

    //
    let totalddc=document.getElementById("totaldedu").value;
    let vneto=totaldevo-totalddc; //Valor Neto a Pagar$$

    //CALCULAR NETO A PAGAR AL EMPLEADO
    
    document.getElementById("neto").value=vneto.toFixed(0);
}
function openMenu(){
    document.getElementById("mainMenu").style.width="480px"; //VISTA CELULAR
    document.getElementById("mainMenu").style.display="flex"; //VISTA CELULAR
    document.getElementById("mainMenu").style.height="1000px"; //VISTA CELULAR
    document.getElementById("openmenu").style.display="none"; //VISTA CELULAR
}

function closeNav(){
    document.getElementById("mainMenu").style.width="0px"; //CERRAR VISTA CELULAR
    document.getElementById("mainMenu").style.transition="0.9 all"; //CERRAR VISTA CELULAR
    window.location.reload();//CARGAR PAGINA CON LA FLECHA F5
}
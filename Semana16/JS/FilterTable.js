function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos"); //Dato Ingresado
    filter = input.value.toUpperCase();//Convertir Texto En Mayuscula
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) { //Recorre Tabla Columna, Nombre Pelicula
        td = tr[i].getElementsByTagName("td")[0];

        if (td) {
            txtValue = td.textContent || td.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
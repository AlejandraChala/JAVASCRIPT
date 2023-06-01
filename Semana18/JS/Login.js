function validainputs() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let ingreso = document.getElementById("login");
    let emailval = email.value.trim(); //Eliminar Espacios En Blanco
    let passwordval = password.value.trim();
    let passworddork = "a12345"; //Clave Real De  Ingreso

    //Variable Tipo Switch Error=0 'No Ocurre Error' Error=1 'Si Ocurre Error'
    var errorf = 0;
    if (emailval === "") {
        ocErrorform(email, "POR FAVOR INGRESE SU EMAIL");
        errorf = f1;
    } else if (!valEmail(emailval)) {
        ocErrorform(email, "EMAIL NO VALIDO");
        errorf = f1;
    } else {
        exitosform(email);
    }

    //Validar Contraseña
    if (passwordval === "") {
        ocErrorform(password, "POR FAVOR INGRESE SU CONTRASEÑA");
        errorf = 1;
    } else if (passwordval != passworddork) {
        ocErrorform(password, "CONTRASEÑA NO VALIDA");
        errorf = 1;
    } else {
        exitosform(password);
    }

    //Validar Si La Informacion Es Correcta
    if (errorf == 0) {
        ingreso.addEventListener("click", function () {
            swal("ACCESO PERMITIDO!!", "CLICK OK PARA CONTINUAR", "success")
        })
    } return false;

    //Funcion Para Validar Errores En Formularios
    function ocErrorform(input, message) {
        let formControl = input.parentElement;
        let small = formControl.querySelector("small");
        formControl.className = "form-control error";
        small.innerText = message;
    }
    // Función Para Ingreso Exitoso En Formularios
    function exitosform(input) {
        let formControl = input.parentElement;
        formControl.className = "form-control success";
    }
    function valEmail(email) {
        return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
    }
}
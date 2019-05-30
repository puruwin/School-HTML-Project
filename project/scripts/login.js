window.onload = function(){
    setTimeout(muestraFecha, 0);
    setInterval(muestraFecha, 1000);

    setTimeout(muestraAlert, 500);

    goChange();

    autoFocus();

    document.getElementById("dropdownHover").onmouseover = mostrarDrop;
    document.getElementById("dropdownHover").onmouseout = mostrarDrop;
    
    document.getElementById("almacenar").addEventListener("click", validarForm, false);

    setInterval(charCount, 0);
}

var baseDatos = [];

// Almacena la información en forma de objeto para después mostrarla. Se ejecuta pulsando REGISTRARSE.
function almacenar() {
    function Usuario(username, pass, mail) {
        this.username = username;
        this.password = pass;
        this.email = mail;
    }
    var almacenarNombre = document.getElementById("username").value;
    var almacenarPass = document.getElementById("password").value;
    var almacenarMail = document.getElementById("correo").value;
    var almacenarConf = document.getElementById("confirmacion").value;
    var mail;

    
    // Controla que el correo y la confirmación del mismo sean iguales.
    try {
        if(almacenarMail == almacenarConf) {
            mail = almacenarMail;
            nuevoUsuario = new Usuario(almacenarNombre, almacenarPass, mail);
            baseDatos.push(nuevoUsuario);
        }
        else if(almacenarMail != almacenarConf) {
            throw "Los correos no son iguales";
        }
    }
    catch(e) {
        alert(e);
    }
    finally{
    }

}

// Muestra los objetos previamente almacenados al presionar el boton de MOSTRAR REGISTROS.
function mostrar() {
    var datos = "Usuario Contraseña Correo\n";
    
    for(var i = 0; i < baseDatos.length; i++) {
        datos += baseDatos[i].username + " " + baseDatos[i].password + " " + baseDatos[i].email + "\n";
    }
    alert(datos);
}

// Al cargar la página directamente entra en el primer campo del formulario.
function autoFocus() {
    if (document.forms.length > 0) {
        if(document.forms[0].elements.length > 0) {
            document.forms[0].elements[0].focus();
        }
    }
}

// Vacía el Textarea pulsando el botón LIMPIAR.
function vaciarTextarea() {
    var textArea = document.getElementById("texta");
    textArea.value = "";
}

// Muestra los caracteres escritos en el Textarea.
function charCount() {
    var textArea = document.getElementById("texta");
    var parr = document.getElementById("count");
    parr.innerHTML = "Número de caracteres: " + textArea.value.length;
}
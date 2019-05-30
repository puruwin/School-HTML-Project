function validarForm(e) {
    var event = e || window.event;
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if(username.value == null || username.value.length == 0) {
        username.style.borderBottomColor = "red";
        alert("Rellena el campo Nombre de Usuario")
        return false;
    }
    if(password.value == null || password.value.length == 0) {
        password.style.borderBottomColor = "red";
        alert("Rellena el campo Contraseña");
        return false;
    }

    almacenar();
}
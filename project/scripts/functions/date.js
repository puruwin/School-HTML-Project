// Cambia el valor de un p mostrando la fecha y la hora.
function muestraFecha() {
    let today, dd, mm, aaaa, hh, min, ss;
    let timeText = document.getElementById("time");
    
    today = new Date();

    dd = today.getDate();

    mm = today.getMonth() + 1;

    aaaa = today.getFullYear();

    hh = today.getHours();

    min = today.getMinutes();

    ss = today.getSeconds();
    
    // Si alguno de los parámetros de la fecha es menor que diez,
    // se aplica un 0 delante con fines estéticos.

    if (dd < 10) {
        dd = "0" + dd;
    }

    if (mm < 10) {
        mm = "0" + mm;
    }

    if (hh < 10) {
        hh = "0" + hh;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (ss < 10) {
        ss = "0" + ss;
    }

    timeText.innerHTML = dd + "-" + mm + "-" + aaaa + " " + hh + ":" + min + ":" + ss;

}
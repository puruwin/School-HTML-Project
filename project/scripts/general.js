window.onload = function(){
    setTimeout(muestraFecha, 0);
    setInterval(muestraFecha, 1000);

    setTimeout(muestraAlert, 500);

    document.getElementById("dropdownHover").onmouseover = mostrarDrop;
    document.getElementById("dropdownHover").onmouseout = mostrarDrop;

    goChange();
}
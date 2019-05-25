window.onload = function(){
    setTimeout(muestraFecha, 0);
    setInterval(muestraFecha, 1000);

    setTimeout(muestraAlert, 500);

    setInterval(slide,3000);
    
    document.getElementById("dropdownHover").onmouseover = mostrarDrop;
    document.getElementById("dropdownHover").onmouseout = mostrarDrop;

    goChange();
}






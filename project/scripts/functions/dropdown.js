function mostrarDrop(e){
    var event = window.event || e;
    var container = document.getElementById("dropdown");

    if(event.type == "mouseover") {
        container.style.display = "block";
    } else if(event.type == "mouseout") {
        container.style.display = "none";
    }
}

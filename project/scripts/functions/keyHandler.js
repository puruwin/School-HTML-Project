// Cambia el color al presionar CTRL + C
function changeColor(e) {
    var background = document.getElementById("wrapper");

    if (e.ctrlKey && e.which == 67) {
        var randColor = (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        background.style.backgroundImage = "linear-gradient(#24292e, #24292e, #" + randColor + ")";
    }
}

// Controla el evento para que al dejar de presionar cualquier tecla vea si ha sido mediante CTRL + C
function goChange(){
    document.onkeyup = changeColor;
}

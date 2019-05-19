// Carrusel de imágenes.
function slide(){
	var images=["calefaccion.jpg", "agua.jpg", "climatizacion.jpg", "fontaneria.jpg", "electricidad.jpg"];
	banner.style.backgroundImage="url('media/images/"+images[counter]+"')";
	
	if (counter == images.length-1) {
		counter = 0;
	} else {
		counter++;
	}
}
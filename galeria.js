/**
 * Función para consumir una api rest 
 */

 async function getCharacters(){
    //Generar petición a la api
    const peticion= await fetch("../html/doc.json");
    console.log(peticion);
    const personajes = await peticion.json(); /*json es un tipo de archivo similar a los diccionarios de python */
    console.log(personajes);
//Agregar código html al documento
let contenedor=document.getElementById("contPersonajes");
    //mostrar los personajes en consola
    personajes.forEach(element => {
        //console.log(personaje.Name+"-Especie:" +personaje.Species);
        //Estamos concatenando con el +=
        let tarjetaPersonaje="<div class='card' style='width: 18rem;'>";
        tarjetaPersonaje += "<img id='"+element.Name+"' src='"+element.PicUrl+"' class='card-img-top' alt=''>";
        tarjetaPersonaje +="<div class='card-body'>";
        tarjetaPersonaje +="<h5 class='card-title'>"+element.Name+"</h5>";
        tarjetaPersonaje += "<p class='card-text'></p>";
        tarjetaPersonaje +="</div></div>";
        contenedor.innerHTML += tarjetaPersonaje;
    });
        

}





 /* // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  contPersonajes .forEach(card-img-top => {
  var img1 = document.getElementById("contPersonajes");
  var modalImg = document.getElementById("contPersonajes");
  var captionText = document.getElementById("Name");
  img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }*/

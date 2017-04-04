var contadorClicks = 0;
var numeroDeCaracteres = 0;


var textoArea = document.getElementById("area");
var textoUsuario = document.getElementById("usuario");
var boton = document.getElementById("boton");

function clicks () {

  contadorClicks ++;
 var texto = "Contador de clicks: " + contadorClicks;
document.getElementById("contadorDeClicks").innerHTML = texto;

}

 function clicksH1 () {
  clicks();
}

function clicksH2 () {
  clicks();
}


function contadorDeLetras () {
  numeroDeCaracteres = textoArea.value.length;
  var cantidadCaracteres = document.getElementById("cajaDeTexto");
  cantidadCaracteres.innerHTML = numeroDeCaracteres;
 }

 function publicarTuits () {
   if(textoArea.value !== ""){
         var seccionPublicaciones = document.getElementById("tuits");


        var tarjetaPublicacion = document.createElement("article");
        var twitNuevo = document.createElement("p");
        var autorTwit = document.createElement("h5");

        twitNuevo.innerHTML = textoArea.value;
        autorTwit.innerHTML = textoUsuario.value;

        tarjetaPublicacion.appendChild(autorTwit);
        tarjetaPublicacion.appendChild(twitNuevo);

        seccionPublicaciones.insertBefore(tarjetaPublicacion,seccionPublicaciones.firstChild);

        textoArea.value = "";
        textoUsuario.value = "";
        contadoraDeLetras();
    }
}

// Añadir eventos
 textoArea.addEventListener("keyup",contadorDeLetras);
 boton.addEventListener("click",publicarTuits);

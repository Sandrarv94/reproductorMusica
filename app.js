const canciones = [
  {
    name: "Song 1",
    url: "./audios/song1.mp3",
    artist: "Artist 1",
    image: "./images/caratula1.svg",
  },
  {
    name: "Song 2",
    url: "./audios/song2.mp3",
    artist: "Artist 2",
    image: "./images/caratula2.svg",
  },
  {
    name: "Song 3",
    url: "./audios/song3.mp3",
    artist: "Artist 3",
    image: "./images/caratula3.svg",
  },
  {
    name: "Song 4",
    url: "./audios/song4.mp3",
    artist: "Artist 4",
    image: "./images/caratula4.svg",
  },
];

const botonAnterior = document.getElementById("btn-anterior");
const botonSiguiente = document.getElementById("btn-siguiente");
const botonReproducirPausa = document.getElementById("btn-reproducir-pausa");
const imagenReproducirYPausa = document.getElementById("reproducir-pausa");
const nombreCancion = document.getElementById("nombreCancion");
const nombreArtista = document.getElementById("nombreArtista");
const imagenCancion = document.getElementById("imagenCancion");
const reproductor = document.getElementById("reproductor");

const setCancion = () => {
  imagenCancion.src = canciones[cancionSeleccionada].image;
  reproductor.src = canciones[cancionSeleccionada].url;
  nombreArtista.src = canciones[cancionSeleccionada].artist;
  nombreArtista.innerHTML = nombreArtista.src =
    canciones[cancionSeleccionada].artist;
};

let cancionSeleccionada = 0;
setCancion();

const seleccionarCancion = (idx) => {
  cancionSeleccionada = idx;
  setCancion();
}


 function pasarASiguienteCancion(){
    if(cancionSeleccionada>= canciones.length-1){
        cancionSeleccionada = 0;
    } else{

        cancionSeleccionada++;
    }
  setCancion();
}

function pasarAAnteriorCancion(){
  if (cancionSeleccionada <= 0) {
    cancionSeleccionada = canciones.length - 1;
  } else {
    cancionSeleccionada--;
  }
  setCancion();
}

function reproducirOPausar(){
    if(reproductor.paused){

        reproductor.play();
        imagenReproducirYPausa.src = "./images/btn-pausa.svg";    
    }else{
        reproductor.pause();
        imagenReproducirYPausa.src = "./images/btn-reproducir.svg";
    }
}
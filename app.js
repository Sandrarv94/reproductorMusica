const canciones = [
  {
    name: "Amargura",
    url: "./audios/amargura-letra-lyrics.mp3",
    artist: "Karol G",
    image: "./imagenes/caratulaAmargura.png",
  },
  {
    name: "Karmika",
    url: "./audios/y2mate.com - KÁRMIKA.mp3",
    artist: "Karol G",
    image: "./imagenes/caratulaKarmika.png",
  },
  {
    name: "Carolina",
    url: "./audios/y2mate.com - KAROL G  Carolina Visualizer.mp3",
    artist: "Karol G",
    image: "./imagenes/caratulaCarolina.png",
  },
  {
    name: "PeroTu",
    url: "./audios/y2mate.com - KAROL G Quevedo  Pero Tú Visualizer.mp3",
    artist: "Karol G",
    image: "./imagenes/caratulaPeroTu.png",
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
    nombreCancion.innerHTML = nombreCancion.src = canciones[cancionSeleccionada].name;
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
        imagenReproducirYPausa.src = "./imagenes/btn-pausa.svg";    
    }else{
        reproductor.pause();
        imagenReproducirYPausa.src = "./imagenes/btn-reproducir.svg";
    }
}
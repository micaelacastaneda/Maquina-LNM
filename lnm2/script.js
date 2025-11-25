// Lista de videos (poné tus nombres acá)
const estados = [
    "videos/estado0.mp4",
    "videos/estado2.mp4",
    "videos/estado3.mp4",
    "videos/estado4.mp4"
];

let indice = 0;

// Elemento del video
const videoEl = document.getElementById("video");

// Carga del estado actual
function cargarEstado() {
    videoEl.src = estados[indice];
    videoEl.play();
}

// Manejo de flechas
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        indice++;
        if (indice >= estados.length) indice = 0;
        cargarEstado();
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        indice--;
        if (indice < 0) indice = estados.length - 1;
        cargarEstado();
    }
});

// Cargar el primer video
cargarEstado();
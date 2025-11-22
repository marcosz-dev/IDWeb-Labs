const cuadro = document.getElementById("cuadro");
const btnMover = document.getElementById("btnMover");
const btnReiniciar = document.getElementById("btnReiniciar");

btnMover.addEventListener("click", () => {
    cuadro.classList.add("mover");
});

btnReiniciar.addEventListener("click", () => {
    cuadro.classList.remove("mover");
    cuadro.style.left = "0px";
});

let numero = 0;
const span = document.getElementById("valor");
const mensaje = document.getElementById("mensaje");

document.getElementById("mas").onclick = () => {
    numero++;
    span.textContent = numero;
    mensaje.textContent = "";
};

document.getElementById("menos").onclick = () => {
    if (numero === 0) {
        mensaje.textContent = "No puede bajar de 0";
        return;
    }
    numero--;
    span.textContent = numero;
};

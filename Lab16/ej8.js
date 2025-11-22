const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const btnValidar = document.getElementById("validar");

function limpiarErrores() {
    const errores = document.querySelectorAll(".error-msg");
    errores.forEach(e => e.remove());
}

function mostrarError(input, mensaje) {
    const span = document.createElement("span");
    span.textContent = mensaje;
    span.style.color = "red";
    span.classList.add("error-msg");
    input.insertAdjacentElement("afterend", span);
}

btnValidar.addEventListener("click", () => {
    limpiarErrores();

    if (inputNombre.value.trim() === "") {
        mostrarError(inputNombre, " El nombre no puede estar vacío");
    }

    if (inputCorreo.value.trim() === "") {
        mostrarError(inputCorreo, " El correo no puede estar vacío");
    }
});

const inputNom = document.getElementById("nombre");
const btnGuardar = document.getElementById("guardar");

btnGuardar.addEventListener("click", () => {
    const usuario = {
        nombre: inputNom.value.trim()
    };
    const json = JSON.stringify(usuario);
    console.log(json);
});

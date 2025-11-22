const formPerfil = document.getElementById("formPerfil");
const pPerfil = document.getElementById("perfil");

function mostrarPerfilGuardado() {
    const datos = localStorage.getItem("perfilUsuario");
    if (!datos) return;
    const obj = JSON.parse(datos);
    pPerfil.textContent = `Nombre: ${obj.nombre}, Edad: ${obj.edad}, País: ${obj.pais}`;
}

formPerfil.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const pais = document.getElementById("pais").value.trim();

    if (nombre === "" || edad === "" || pais === "") return;

    const perfil = { nombre, edad, pais };
    const json = JSON.stringify(perfil);
    localStorage.setItem("perfilUsuario", json);
    mostrarPerfilGuardado();
});

mostrarPerfilGuardado();

const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputRol = document.getElementById("rol");
const pMostrar = document.getElementById("mostrar");

function mostrarUsuarioGuardado() {
    const datos = localStorage.getItem("usuario");
    if (!datos) return;
    const obj = JSON.parse(datos);
    pMostrar.textContent = `Nombre: ${obj.nombre}, Correo: ${obj.correo}, Rol: ${obj.rol}`;
}

document.getElementById("guardar").addEventListener("click", () => {
    const usuario = {
        nombre: inputNombre.value.trim(),
        correo: inputCorreo.value.trim(),
        rol: inputRol.value.trim()
    };
    const json = JSON.stringify(usuario);
    localStorage.setItem("usuario", json);
    mostrarUsuarioGuardado();
});

mostrarUsuarioGuardado();

const form = document.getElementById("formUsuario");
const tbody = document.getElementById("tbodyUsuarios");

let usuarios = [];
let contadorId = 1;

function renderTabla() {
    tbody.innerHTML = "";
    usuarios.forEach(u => {
        const tr = document.createElement("tr");

        const tdNombre = document.createElement("td");
        const tdEdad = document.createElement("td");
        const tdAcciones = document.createElement("td");

        tdNombre.textContent = u.nombre;
        tdEdad.textContent = u.edad;

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.dataset.id = u.id;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.dataset.id = u.id;

        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);

        tr.appendChild(tdNombre);
        tr.appendChild(tdEdad);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();

    if (nombre === "" || edad === "") return;

    usuarios.push({
        id: contadorId++,
        nombre,
        edad
    });

    form.reset();
    renderTabla();
});

tbody.addEventListener("click", (event) => {
    const id = Number(event.target.dataset.id);
    if (!id) return;

    if (event.target.textContent === "Eliminar") {
        usuarios = usuarios.filter(u => u.id !== id);
        renderTabla();
    } else if (event.target.textContent === "Editar") {
        const usuario = usuarios.find(u => u.id === id);
        if (!usuario) return;
        const nuevoNombre = prompt("Nuevo nombre:", usuario.nombre);
        const nuevaEdad = prompt("Nueva edad:", usuario.edad);
        if (nuevoNombre && nuevaEdad) {
            usuario.nombre = nuevoNombre;
            usuario.edad = nuevaEdad;
            renderTabla();
        }
    }
});

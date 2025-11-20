const seccion = document.querySelector("section");

// Crear nuevo h2 al inicio
const nuevoTitulo = document.createElement("h2");
nuevoTitulo.textContent = "Título nuevo";
seccion.insertBefore(nuevoTitulo, seccion.firstChild);
console.log("Nuevo h2 creado al inicio");

// Agregar descripción al final
const descripcion = document.createElement("p");
descripcion.textContent = "Descripción generada";
seccion.appendChild(descripcion);
console.log("Descripción agregada");

// Agregar lista con 3 items
const lista = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    const item = document.createElement("li");
    item.textContent = `Ítem ${i}`;
    lista.appendChild(item);
}
seccion.appendChild(lista);
console.log("Lista con 3 items agregada");

// Eliminar h2 original, ahora es el segundo h2
const h2Original = seccion.querySelectorAll("h2")[1];
if (h2Original) {
    h2Original.remove();
    console.log("H2 original eliminado");
}
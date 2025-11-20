const contenedorDiv = document.getElementById("contenedor");

for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = `Párrafo ${i} del contenedor`;
    contenedorDiv.appendChild(p);
}

console.log("3 párrafos creados");

const segundoParrafo = contenedorDiv.children[1];
segundoParrafo.remove();

console.log("Segundo párrafo eliminado");
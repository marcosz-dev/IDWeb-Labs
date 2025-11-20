const nuevaLista = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = `Elemento ${i}`;
    nuevaLista.appendChild(nuevoLi);
}
const primeraSeccion = document.querySelector("section");
primeraSeccion.appendChild(nuevaLista);
console.log("Lista con 5 elementos creada e insertada en la sección");
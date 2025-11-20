const contenedor = document.getElementById("contenedor");
const parrafosArray = Array.from(contenedor.querySelectorAll("p"));

parrafosArray.sort((a, b) => a.textContent.localeCompare(b.textContent));

parrafosArray.forEach(p => contenedor.appendChild(p));

console.log("Párrafos reordenados alfabéticamente");
console.log("Orden:", parrafosArray.map(p => p.textContent).join(", "));
const parrafoAReemplazar = document.querySelectorAll("p")[1];
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Párrafo reemplazado";
nuevoDiv.style.border = "2px solid red";
nuevoDiv.style.padding = "10px";
parrafoAReemplazar.parentNode.replaceChild(nuevoDiv, parrafoAReemplazar);
console.log("Párrafo reemplazado por un div");
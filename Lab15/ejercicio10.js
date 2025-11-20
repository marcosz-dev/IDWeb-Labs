const nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "Título insertado antes del primer párrafo";
const primerParrafo = document.querySelector("p");
primerParrafo.parentNode.insertBefore(nuevoH3, primerParrafo);
console.log("Nuevo h3 insertado antes del primer párrafo");
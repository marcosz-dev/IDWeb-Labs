const todosParrafos = document.querySelectorAll("p");
const ultimoParrafo = todosParrafos[todosParrafos.length - 1];
ultimoParrafo.remove();
console.log("Último párrafo eliminado del DOM");
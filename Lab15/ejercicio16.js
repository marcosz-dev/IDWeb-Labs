const primeraLista = document.querySelector("ul");
const ultimoLi = primeraLista.lastElementChild;
primeraLista.insertBefore(ultimoLi, primeraLista.firstElementChild);
console.log("Último elemento movido al principio de la lista");
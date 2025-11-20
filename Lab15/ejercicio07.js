const miLista = document.getElementById("miLista");
console.log("Elementos de la lista:");
for (let li of miLista.children) {
    console.log("- " + li.textContent);
}
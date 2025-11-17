const todosLosParrafos = document.querySelectorAll("p");
todosLosParrafos.forEach(parrafo => {
    parrafo.textContent = "Texto actualizado dinámicamente";
});
console.log(`Se actualizaron ${todosLosParrafos.length} párrafos`);
const todosLosLi = document.querySelectorAll("li");
todosLosLi.forEach(li => {
    li.classList.add("resaltado");
    li.classList.remove("oculto");
});
console.log(`Clases actualizadas en ${todosLosLi.length} elementos <li>`);
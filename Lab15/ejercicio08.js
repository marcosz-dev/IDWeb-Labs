const todosLosDivs = document.querySelectorAll("div");
const colores = ["lightblue", "lightcoral", "lightgreen", "lightyellow", "lightpink"];

todosLosDivs.forEach((div, index) => {
    div.style.backgroundColor = colores[index % colores.length];
});

console.log(`Colores aplicados a ${todosLosDivs.length} divs`);
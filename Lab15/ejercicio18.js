const todasLasSecciones = document.querySelectorAll("section");
todasLasSecciones.forEach((section, index) => {
    section.setAttribute("data-index", index);
});

console.log("Atributo data-index agregado a todas las secciones");
todasLasSecciones.forEach((section, index) => {
    console.log(`Sección ${index}: data-index="${section.getAttribute("data-index")}"`);
});
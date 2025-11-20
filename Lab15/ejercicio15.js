const primerArticle = document.querySelector("article");
const clonArticle = primerArticle.cloneNode(true);
const mainElement = document.querySelector("main");
mainElement.appendChild(clonArticle);
console.log("Artículo clonado y agregado al final del main");
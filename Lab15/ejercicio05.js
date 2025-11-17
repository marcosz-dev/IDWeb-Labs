const primeraImagen = document.querySelector("img");
primeraImagen.setAttribute("src", "nueva-imagen.jpg");
primeraImagen.setAttribute("alt", "Nueva descripción de imagen");
console.log("Atributos de imagen actualizados:");
console.log("src:", primeraImagen.getAttribute("src"));
console.log("alt:", primeraImagen.getAttribute("alt"));
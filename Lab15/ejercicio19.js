const cantidadDivs = document.querySelectorAll("div").length;
const parrafoCantidad = document.createElement("p");
parrafoCantidad.textContent = `Total de elementos <div> en el documento: ${cantidadDivs}`;
parrafoCantidad.style.fontWeight = "bold";
parrafoCantidad.style.color = "blue";
parrafoCantidad.style.fontSize = "18px";
document.body.appendChild(parrafoCantidad);
console.log(`Total de divs encontrados: ${cantidadDivs}`);
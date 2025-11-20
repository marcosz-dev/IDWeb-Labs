const listaCompleja = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = "Nivel interno";
    span.style.fontStyle = "italic";
    span.style.color = "purple";
    li.appendChild(span);
    listaCompleja.appendChild(li);
}

document.body.appendChild(listaCompleja);
console.log("Lista compleja con spans internos creada y agregada al documento");
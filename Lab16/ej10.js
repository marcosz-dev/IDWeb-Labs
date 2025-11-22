const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 },
];

document.getElementById("generar").addEventListener("click", () => {
    const contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = "";

    const tabla = document.createElement("table");

    tabla.style.border = "1px solid black";
    tabla.style.borderCollapse = "collapse";

    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    ["Nombre", "Precio"].forEach(texto => {
        const th = document.createElement("th");
        th.textContent = texto;
        th.style.border = "1px solid black";     
        th.style.padding = "5px";
        trHead.appendChild(th);
    });

    thead.appendChild(trHead);
    tabla.appendChild(thead);

    const tbody = document.createElement("tbody");

    productos.forEach(p => {
        const tr = document.createElement("tr");

        const tdNombre = document.createElement("td");
        const tdPrecio = document.createElement("td");

        tdNombre.textContent = p.nombre;
        tdPrecio.textContent = p.precio;

        [tdNombre, tdPrecio].forEach(td => {
            td.style.border = "1px solid black";
            td.style.padding = "5px";
        });

        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    contenedor.appendChild(tabla);
});

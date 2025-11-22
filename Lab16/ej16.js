const productos = [
    { nombre: "Teclado", precio: 120 },
    { nombre: "Monitor", precio: 800 },
    { nombre: "Parlantes", precio: 200 }
];

const jsonProductos = JSON.stringify(productos);
const productosRecuperados = JSON.parse(jsonProductos);

const ul = document.getElementById("listaProductos");

productosRecuperados.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.nombre;
    ul.appendChild(li);
});

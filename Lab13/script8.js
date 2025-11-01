let productos = new Map([
    ["manzana", 2.5],
    ["pan", 1.8],
    ["leche", 3.2],
    ["arroz", 4.5],
    ["huevos", 5.0]
]);

function calcularTotal(listaCompras, catalogo) {
    let total = 0;
    for (let producto of listaCompras) {
        if (catalogo.has(producto)) {
            total += catalogo.get(producto);
        }
    }
    return total.toFixed(2);
}

// Pruebas
let compras = ["manzana", "pan", "leche", "manzana"];
console.log(`Total: S/. ${calcularTotal(compras, productos)}`); // 10.00
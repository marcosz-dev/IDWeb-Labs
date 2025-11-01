function combinarCatalogos(tiendaA, tiendaB) {
    let catalogo = {};
    
    // Agregar productos de tienda A
    for (let producto in tiendaA) {
        catalogo[producto] = parseFloat(tiendaA[producto].toFixed(2));
    }
    
    // Agregar productos de tienda B (o actualizar si el precio es menor)
    for (let producto in tiendaB) {
        let precioB = parseFloat(tiendaB[producto].toFixed(2));
        if (!catalogo[producto] || precioB < catalogo[producto]) {
            catalogo[producto] = precioB;
        }
    }
    
    return catalogo;
}

// Pruebas
let tiendaA = { laptop: 3500.5, mouse: 100.35, teclado: 250.9 };
let tiendaB = { mouse: 95.2, monitor: 720.457, teclado: 260.1 };

console.log(combinarCatalogos(tiendaA, tiendaB));

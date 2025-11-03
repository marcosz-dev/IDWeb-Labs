function calcularDistancia(x1, y1, x2, y2) {
    const distancia = Math.hypot(x2 - x1, y2 - y1);
    const distanciaOrigen1 = Math.hypot(x1, y1);
    const distanciaOrigen2 = Math.hypot(x2, y2);
    const sumaDistancias = distanciaOrigen1 + distanciaOrigen2;
    
    console.log(`Punto 1: (${x1}, ${y1})`);
    console.log(`Punto 2: (${x2}, ${y2})`);
    console.log(`Distancia entre puntos: ${distancia}`);
    console.log(`Distancia del punto 1 al origen: ${distanciaOrigen1}`);
    console.log(`Distancia del punto 2 al origen: ${distanciaOrigen2}`);
    console.log(`Suma de distancias al origen: ${sumaDistancias}`);
}

// Pruebas
calcularDistancia(3, 4, 6, 8);
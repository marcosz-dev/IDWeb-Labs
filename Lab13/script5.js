function reordenarPalabras(oracion) {
    return oracion
        .split(' ')
        .map(palabra => palabra.toUpperCase())
        .sort();
}

// Pruebas
console.log(reordenarPalabras("sol luna estrella planeta"));
console.log(reordenarPalabras("zebra alpha beta"));

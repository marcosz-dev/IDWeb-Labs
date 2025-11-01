function contarPalabras(texto) {
    let palabras = texto.toLowerCase().split(' ');
    let frecuencia = new Map();
    
    for (let palabra of palabras) {
        if (palabra) { // Ignorar strings vacíos
            frecuencia.set(palabra, (frecuencia.get(palabra) || 0) + 1);
        }
    }
    
    return frecuencia;
}

// Pruebas
console.log(contarPalabras("sol luna sol sol estrella luna"));
console.log(contarPalabras("hola mundo hola"));

function contarLetras(texto) {
    let frecuencia = {};
    let textoLower = texto.toLowerCase();
    
    for (let char of textoLower) {
        if (char !== ' ') { // Ignorar espacios
            frecuencia[char] = (frecuencia[char] || 0) + 1;
        }
    }
    
    return frecuencia;
}

// Pruebas
console.log(contarLetras("banana")); 
console.log(contarLetras("Hola Mundo")); 
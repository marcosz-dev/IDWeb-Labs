function crearSecuencia(inicio, paso) {
    let valorActual = inicio;
    let primerLlamada = true;
    
    return function() {
        if (primerLlamada) {
            primerLlamada = false;
            return valorActual;
        }
        valorActual += paso;
        return valorActual;
    };
}

// Llamadas de ejemplo
const secuencia = crearSecuencia(2, 3);
console.log(secuencia());  // 2
console.log(secuencia());  // 5
console.log(secuencia());  // 8
console.log(secuencia());  // 11

const secuencia2 = crearSecuencia(10, 5);
console.log(secuencia2()); // 10
console.log(secuencia2()); // 15
console.log(secuencia2()); // 20
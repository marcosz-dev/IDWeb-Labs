function crearContador(valorInicial = 0) {
    let contador = valorInicial;
    
    return {
        incrementar: function() {
            contador++;
            return contador;
        },
        resetear: function() {
            contador = valorInicial;
            return contador;
        },
        obtenerValor: function() {
            return contador;
        }
    };
}

// Llamadas de ejemplo
const miContador = crearContador(10);
console.log(miContador.incrementar());  // 11
console.log(miContador.incrementar());  // 12
console.log(miContador.incrementar());  // 13
console.log(miContador.resetear());     // 10
console.log(miContador.incrementar());  // 11
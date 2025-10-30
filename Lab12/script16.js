function acumulador(valorInicial) {
    let total = valorInicial;
    
    return function(valor) {
        total += valor;
        return total;
    };
}

// Llamadas de ejemplo
const suma = acumulador(0);
console.log(suma(5));   // 5
console.log(suma(10));  // 15
console.log(suma(3));   // 18

const suma2 = acumulador(100);
console.log(suma2(25)); // 125
console.log(suma2(50)); // 175
function operacionesMatematicas() {
    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => b !== 0 ? a / b : "Error: división por cero";
    
    return {
        sumar,
        restar,
        multiplicar,
        dividir
    };
}

// Llamadas de ejemplo
const ops = operacionesMatematicas();
console.log(ops.sumar(10, 5));        // 15
console.log(ops.restar(10, 5));       // 5
console.log(ops.multiplicar(10, 5));  // 50
console.log(ops.dividir(10, 5));      // 2
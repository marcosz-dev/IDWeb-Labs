function ejecutarOperacion(fn, x, y) {
    return fn(x, y);
}

// Funciones aritméticas de ejemplo
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

// Llamadas de ejemplo
console.log(ejecutarOperacion(sumar, 10, 5));        // 15
console.log(ejecutarOperacion(multiplicar, 7, 3));   // 21
console.log(ejecutarOperacion(dividir, 20, 4));      // 5
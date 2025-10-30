
function filtrarArreglo(arr, callback) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}

// Llamadas de ejemplo
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarArreglo(numeros, num => num % 2 === 0));  // [2, 4, 6, 8, 10]
console.log(filtrarArreglo(numeros, num => num > 5));        // [6, 7, 8, 9, 10]
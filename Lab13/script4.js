function filtrarYTransformar(arr) {
    return arr
        .filter(num => num >= 0)
        .map(num => num * num)
        .reduce((suma, cuadrado) => suma + cuadrado, 0);
}

// Pruebas
console.log(filtrarYTransformar([2, -3, 4, -1, 5])); // 45
console.log(filtrarYTransformar([1, 2, 3])); // 14
console.log(filtrarYTransformar([-1, -2, -3])); // 0
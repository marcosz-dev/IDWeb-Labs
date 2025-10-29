function doblarNumeros(arr) {
    return arr.map(num => num * 2);
}

// Pruebas
console.log(doblarNumeros([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
console.log(doblarNumeros([10, 20, 30])); // [20, 40, 60]
console.log(doblarNumeros([-5, 0, 5])); // [-10, 0, 10]
function tieneDuplicados(arr) {
    return arr.length !== new Set(arr).size;
}

// Pruebas
console.log(tieneDuplicados([1, 2, 3, 4, 5])); // false
console.log(tieneDuplicados([1, 2, 3, 2, 5])); // true
console.log(tieneDuplicados(["a", "b", "c"])); // false
console.log(tieneDuplicados(["a", "b", "a"])); // true
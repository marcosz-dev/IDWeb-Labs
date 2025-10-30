function media(...numeros) {
    if (numeros.length === 0) return 0;
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}

// Llamadas de ejemplo
console.log(media(10, 20, 30));           // 20
console.log(media(5, 15, 25, 35));        // 20
console.log(media(100));                  // 100
console.log(media(12, 14, 16, 18, 20));   // 16
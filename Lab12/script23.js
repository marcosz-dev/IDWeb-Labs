function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    if (exponente === 1) {
        return base;
    }
    if (exponente < 0) {
        return 1 / potencia(base, -exponente);
    }
    return base * potencia(base, exponente - 1);
}

// Llamadas de ejemplo
console.log(potencia(2, 3));   // 8
console.log(potencia(5, 2));   // 25
console.log(potencia(3, 4));   // 81
console.log(potencia(2, 0));   // 1
console.log(potencia(10, 3));  // 1000
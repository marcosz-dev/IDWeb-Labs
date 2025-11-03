function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Número aleatorio entre 1 y 10: ${numeroAleatorio(1, 10)}`);
console.log(`Número aleatorio entre 20 y 30: ${numeroAleatorio(20, 30)}`);
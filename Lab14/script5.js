function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lanzarDados() {
    const dado1 = numeroAleatorio(1, 6);
    const dado2 = numeroAleatorio(1, 6);
    console.log(`Resultado del lanzamiento: Dado 1 = ${dado1}, Dado 2 = ${dado2}, Suma = ${dado1 + dado2}`);
}

lanzarDados();
lanzarDados();
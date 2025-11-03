function potenciasyRaices() {
    let numero = parseFloat(prompt("Ingrese un número:"));

    if (isNaN(numero)) {
        console.log("Por favor, ingrese un número válido.");
        return;
    }

    let cuadrado = Math.pow(numero, 2);
    let cubo = Math.pow(numero, 3);
    let raizCuadrada = Math.sqrt(numero);

    console.log(`El cuadrado de ${numero} es: ${cuadrado}`);
    console.log(`El cubo de ${numero} es: ${cubo}`);
    console.log(`La raíz cuadrada de ${numero} es: ${raizCuadrada}`);
}

potenciasyRaices();
let contadorPares = 0;
let contadorImpares = 0;

for (i=0; i<10; i++) {
    let input = prompt("Introduce un numero:");
    console.log("Numero introducido: " + input);
    if (input % 2 === 0) {
        contadorPares++;
    } else {
        contadorImpares++;
    }
}

console.log("Cantidad de numeros pares: " + contadorPares);
console.log("Cantidad de numeros impares: " + contadorImpares);
// Verificacion de numero armstrong

let numero = Number(prompt("Introduce un numero para verificar si es un numero Armstrong:"));
console.log("Numero ingresado: " + numero);
let suma = 0;
let temp = numero;
let cifras = numero.toString().length;

while (temp > 0) {
    let digito = temp % 10;
    suma += Math.pow(digito, cifras);
    temp = Math.floor(temp / 10);
}

if (suma === numero) {
    console.log(numero + " es un numero Armstrong.");
} else {
    console.log(numero + " no es un numero Armstrong.");
}

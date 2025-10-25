let input = Number(prompt("Introduce un numero:"));

console.log("Suma de numeros hasta " + input + "(omitiendo multiplos de 5):");
let suma = 0;
for (let num = 1; num <= input; num++) {
    if (num % 5 === 0) {
        continue;
    }
    suma += num;
}
console.log("La suma es: " + suma);
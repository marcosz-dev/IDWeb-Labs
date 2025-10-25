let input = Number(prompt("Introduce un numero:"));

console.log("Números primos hasta " + input + ":");

for (let num = 1; num <= input; num++) {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(num);
    }
}

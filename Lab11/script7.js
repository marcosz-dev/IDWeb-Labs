let montoRetiro = Number(prompt("Introduce el monto a retirar:"));
console.log("Monto solicitado: " + montoRetiro);

let resto = montoRetiro;
let denominacion = 100;

console.log("Desglose de billetes para el retiro de " + montoRetiro + ":");

while (denominacion >= 10) {
    let billetes = Math.floor(resto / denominacion);
    resto = resto % denominacion;
    console.log("Billetes de " + denominacion + ": " + billetes);
    
    if (denominacion === 100) {
        denominacion = 50;
    } else if (denominacion === 50) {
        denominacion = 20;
    } else if (denominacion === 20) {
        denominacion = 10;
    } else {
        denominacion = 0;
    }
}
console.log("Resto sin retirar: " + resto);

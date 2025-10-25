
let totalCompra = 0;
let agregarMas = true;

while (agregarMas) {
    let precio = Number(prompt("Ingrese el precio del producto:"));
    totalCompra += precio;
    
    let respuesta = prompt("¿Desea agregar otro producto? (si/no)").toLowerCase();
    if (respuesta !== "si") {
        agregarMas = false;
    }
}

console.log("Total parcial: S/" + totalCompra);

let descuento = 0;
let totalFinal = totalCompra;

if (totalCompra > 100) {
    console.log("Tiene un descuento del 10%");
    descuento = totalCompra * 0.10;
    totalFinal = totalCompra - descuento;
} else if (totalCompra >= 50 && totalCompra <= 100) {
    console.log("Gana un cupón de 5%");
    descuento = totalCompra * 0.05;
    totalFinal = totalCompra - descuento;
} else {
    console.log("No aplica descuento");
}

console.log("Descuento aplicado: S/" + descuento);
console.log("Total final a pagar: S/" + totalFinal);
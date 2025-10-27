const calcularDescuento = function(precio, porcentaje) {
    const descuento = (precio * porcentaje) / 100;
    return precio - descuento;
};

console.log(calcularDescuento(100, 20)); // 80
console.log(calcularDescuento(50, 10));  // 45
console.log(calcularDescuento(200, 15)); // 170
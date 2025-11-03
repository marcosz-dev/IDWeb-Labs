function redondeoPrecio(precio) {
    console.log(`Precio original: ${precio}`);
    console.log(`Precio redondeado hacia abajo: ${Math.floor(precio)}`);
    console.log(`Precio redondeado hacia arriba: ${Math.ceil(precio)}`);
    console.log(`Precio redondeado normal: ${Math.round(precio)}`);
}

redondeoPrecio(12.49);
redondeoPrecio(12.50);
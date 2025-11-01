function invertirMap(map) {
    let invertido = new Map();
    
    for (let [clave, valor] of map) {
        invertido.set(valor, clave);
    }
    
    return invertido;
}

// Pruebas
let capitales = new Map([
    ["Perú", "Lima"],
    ["Chile", "Santiago"]
]);

console.log(invertirMap(capitales));

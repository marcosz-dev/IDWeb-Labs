let continuar = true;

while (continuar) {
    let input = Number(prompt(`Introduce 1 para calcular area de un circulo
2 para calcular area de un rectangulo
0 para salir:`));
    switch (input) {
        case 1:
            console.log("Ingresaste opcion 1.");
            let radio = Number(prompt("Introduce el radio del circulo:"));
            console.log("Calculando area del circulo con radio: " + radio);
            let areaCirculo = Math.PI * Math.pow(radio, 2);
            console.log("El area del circulo es: " + areaCirculo.toFixed(2));
            break;
        case 2:
            console.log("Ingresaste opcion 2.");
            let base = Number(prompt("Introduce la base del rectangulo:"));
            let altura = Number(prompt("Introduce la altura del rectangulo:"));
            console.log("Calculando area del rectangulo con base: " + base + " y altura: " + altura);
            let areaRectangulo = base * altura;
            console.log("El area del rectangulo es: " + areaRectangulo.toFixed(2));
            break;
        case 0:
            continuar = false;
            console.log("Saliendo del programa.");
            break;
        default:
            console.log("Opcion no valida. Intenta de nuevo.");
            }
}
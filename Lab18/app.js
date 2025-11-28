import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

console.log("Suma:", sumar(10, 5));
console.log("Resta:", restar(10, 5));
console.log("Multiplicación:", multiplicar(10, 5));

try {
  const resultadoDivision = dividir(10, 0); // prueba con 0 
  console.log("División:", resultadoDivision);
} catch (error) {
  console.error(`Error en división: "${error.message}"`);
}

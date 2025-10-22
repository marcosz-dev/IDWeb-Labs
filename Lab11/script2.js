let edad = Number(prompt("Introduce tu edad:"));
console.log("Edad ingresada: " + edad);
if (edad < 0) {
    console.log("Edad no válida.");
} else if (edad < 12) {
    console.log("Eres un niño.");
} else if (edad >= 12 && edad < 18) {
    console.log("Eres un adolescente.");
} else if (edad >= 18 && edad < 59) {
    console.log("Eres un adulto.");
} else {
    console.log("Eres un adulto mayor.");
}
let num1 = Number(prompt("Introduce la primera nota:"));
if (num1 > 20 || num1 < 0) {
    console.log("La nota no es válida. Se asignará 0.");
    num1 = 0;
} else {
    console.log("Nota " + num1 + " agregada correctamente.");
}

let num2 = Number(prompt("Introduce la segunda nota:"));
if (num2 > 20 || num2 < 0) {
    console.log("La nota no es válida. Se asignará 0.");
    num2 = 0;
} else {
    console.log("Nota " + num2 + " agregada correctamente.");
}

let num3 = Number(prompt("Introduce la tercera nota:"));
if (num3 > 20 || num3 < 0) {
    console.log("La nota no es válida. Se asignará 0.");
    num3 = 0;
} else {
    console.log("Nota " + num3 + " agregada correctamente.");
}

let num4 = Number(prompt("Introduce la cuarta nota:"));
if (num4 > 20 || num4 < 0) {
    console.log("La nota no es válida. Se asignará 0.");
    num4 = 0;
} else {
    console.log("Nota " + num4 + " agregada correctamente.");
}

let num5 = Number(prompt("Introduce la quinta nota:"));
if (num5 > 20 || num5 < 0) {
    console.log("La nota no es válida. Se asignará 0.");
    num5 = 0;
} else {
    console.log("Nota " + num5 + " agregada correctamente.");
}

let promedio = (num1 + num2 + num3 + num4 + num5) / 5;
console.log("El promedio es: " + promedio); 


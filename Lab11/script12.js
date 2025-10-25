let continuar = true;

while (continuar) {
    let menu = "=== MENÚ PRINCIPAL ===\n";
    menu += "1. Calcular estadísticas de N notas\n";
    menu += "2. Contar números pares e impares en un rango\n";
    menu += "3. Generar una tabla de multiplicar\n";
    menu += "4. Salir\n";
    menu += "Seleccione una opción:";

    let opcion = Number(prompt(menu));

    if (opcion === 1) {
        // --- Opción 1: Estadísticas de N notas ---
        let n = Number(prompt("¿Cuántas notas desea ingresar?:"));
        let notas = [];
        let suma = 0;
        let maximo = -Infinity;
        let minimo = Infinity;
        let pares = 0;
        let impares = 0;

        for (let i = 0; i < n; i++) {
            let nota = Number(prompt(`Ingrese la nota ${i + 1}:`));
            notas.push(nota);
            suma += nota;

            if (nota > maximo) maximo = nota;
            if (nota < minimo) minimo = nota;
            if (nota % 2 === 0) pares++;
            else impares++;
        }

        let promedio = suma / n;
        let encimaProm = notas.filter(nota => nota > promedio).length;

        console.log("\n--- ESTADÍSTICAS ---");
        console.log("Promedio:", promedio.toFixed(2));
        console.log("Valor máximo:", maximo);
        console.log("Valor mínimo:", minimo);
        console.log("Cantidad de pares:", pares);
        console.log("Cantidad de impares:", impares);
        console.log("Notas por encima del promedio:", encimaProm);

    } else if (opcion === 2) {
        // --- Opción 2: Contar pares e impares en un rango ---
        let inicio = Number(prompt("Ingrese el número inicial del rango:"));
        let fin = Number(prompt("Ingrese el número final del rango:"));
        let pares = 0;
        let impares = 0;

        for (let num = inicio; num <= fin; num++) {
            if (num % 2 === 0) pares++;
            else impares++;
        }

        console.log(`\n--- CONTEO EN RANGO [${inicio}, ${fin}] ---`);
        console.log("Números pares:", pares);
        console.log("Números impares:", impares);

    } else if (opcion === 3) {
        // --- Opción 3: Tabla de multiplicar ---
        let numero = Number(prompt("¿Qué tabla de multiplicar desea generar?:"));
        let limite = Number(prompt("¿Hasta qué número desea multiplicar?:"));

        console.log(`\n--- TABLA DEL ${numero} ---`);
        for (let i = 1; i <= limite; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }

    } else if (opcion === 4) {
        console.log("Saliendo del programa...");
        continuar = false;

    } else {
        console.log("Opción inválida. Intente nuevamente.");
    }
}

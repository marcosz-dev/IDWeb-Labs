class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }
    
    calcularSueldo() {
        return this.sueldoBase;
    }
    
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Sueldo: $${this.calcularSueldo()}`);
    }
}

class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    }
    
    calcularSueldo() {
        return this.sueldoBase * 1.10;
    }
    
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo: Programador`);
        console.log(`Lenguaje: ${this.lenguaje}`);
        console.log(`Sueldo base: $${this.sueldoBase}`);
        console.log(`Sueldo con bono: $${this.calcularSueldo()}`);
    }
}

class ProgramadorSenior extends Programador {
    calcularSueldo() {
        return this.sueldoBase * 1.25;
    }
    
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo: Programador Senior`);
        console.log(`Lenguaje: ${this.lenguaje}`);
        console.log(`Sueldo base: $${this.sueldoBase}`);
        console.log(`Sueldo con bono: $${this.calcularSueldo()}`);
    }
}

// Pruebas
const empleado1 = new Empleado("Juan Pérez", 2000);
empleado1.mostrarInfo();

console.log("\n");

const programador1 = new Programador("Ana Martínez", 2000, "JavaScript");
programador1.mostrarInfo();

console.log("\n");

const programadorSenior1 = new ProgramadorSenior("Carlos López", 2000, "Python");
programadorSenior1.mostrarInfo();
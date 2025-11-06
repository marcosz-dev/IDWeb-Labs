class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Email: ${this.email}`);
    }
}

class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = nivelFidelidad;
    }
    
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Tipo: Cliente`);
        console.log(`Nivel de fidelidad: ${this.nivelFidelidad}/5`);
    }
}

class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }
    
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Tipo: Administrador`);
        console.log(`Permisos: ${this.permisos.join(", ")}`);
    }
}

// Pruebas
const cliente1 = new Cliente("Ana López", "ana@email.com", 4);
cliente1.mostrarInfo();

console.log("\n");

const admin1 = new Administrador("Carlos Ruiz", "carlos@email.com", ["crear", "editar", "eliminar"]);
admin1.mostrarInfo();
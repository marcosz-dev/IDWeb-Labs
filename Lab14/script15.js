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
const usuarios = [
    new Cliente("Ana López", "ana@email.com", 4),
    new Administrador("Carlos Ruiz", "carlos@email.com", ["crear", "editar", "eliminar"]),
    new Cliente("María García", "maria@email.com", 5),
    new Administrador("Pedro Sánchez", "pedro@email.com", ["crear", "editar"])
];

usuarios.forEach((usuario, index) => {
    console.log(`\n--- Usuario ${index + 1} ---`);
    usuario.mostrarInfo();
});
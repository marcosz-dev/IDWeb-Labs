function mostrarDatos(nombre, edad, ...hobbies) {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad} años`);
    console.log(`Hobbies: ${hobbies.length > 0 ? hobbies.join(', ') : 'Ninguno'}`);
}

// Llamadas de ejemplo
mostrarDatos("Carlos", 25, "Fútbol", "Lectura", "Programación");
mostrarDatos("Ana", 30);

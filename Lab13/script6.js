let nombres = new Set(["Juan", "María", "Juan", "Pedro", "María", "Ana"]);
console.log(nombres);

// Agregar más nombres
nombres.add("Carlos");
nombres.add("Juan"); // No se agrega porque ya existe

console.log(nombres.size); // 5
console.log([...nombres]); // Convertir a array
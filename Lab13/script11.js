let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2023,
    detalles: function() {
        return `Auto: ${this.marca} ${this.modelo} (${this.año})`;
    }
};

// Pruebas
console.log(auto.detalles()); // "Auto: Toyota Corolla (2023)"
console.log(auto.marca); // "Toyota"
auto.año = 2024;
console.log(auto.detalles()); // "Auto: Toyota Corolla (2024)"
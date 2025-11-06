class Producto {
    #nombre;
    #precio;
    #stock;
    
    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.#precio = 0;
        this.#stock = 0;
        this.precio = precio;
        this.stock = stock;
    }
    
    get nombre() {
        return this.#nombre;
    }
    
    get precio() {
        return `$${this.#precio.toFixed(2)}`;
    }
    
    set precio(valor) {
        const precioNumero = Number(valor);
        if (precioNumero > 0) {
            this.#precio = precioNumero;
        } else {
            console.log("Error: El precio debe ser mayor a 0");
        }
    }
    
    get stock() {
        return this.#stock;
    }
    
    set stock(valor) {
        if (valor > 0) {
            this.#stock = valor;
        } else {
            console.log("Error: El stock debe ser mayor a 0");
        }
    }
    
    vender(cantidad) {
        if (cantidad <= this.#stock) {
            this.#stock -= cantidad;
            console.log(`Venta exitosa. Stock restante: ${this.#stock}`);
        } else {
            console.log(`Error: Stock insuficiente. Disponible: ${this.#stock}`);
        }
    }
    
    mostrarInfo() {
        console.log(`Producto: ${this.#nombre}`);
        console.log(`Precio: ${this.precio}`);
        console.log(`Stock: ${this.#stock}`);
    }
}

// Pruebas
const producto1 = new Producto("Mouse", 25.5, 50);
producto1.mostrarInfo();

producto1.precio = "30.99";
console.log(`Precio actualizado: ${producto1.precio}`);
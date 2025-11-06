class Producto {
    constructor(nombre, precio, cantidad = 1) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    subtotal() {
        return this.precio * this.cantidad;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }
    
    agregarProducto(producto) {
        const productoExistente = this.productos.find(p => p.nombre === producto.nombre);
        
        if (productoExistente) {
            productoExistente.cantidad += producto.cantidad;
            console.log(`Cantidad actualizada de ${producto.nombre}`);
        } else {
            this.productos.push(producto);
            console.log(`${producto.nombre} agregado al carrito`);
        }
    }
    
    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.subtotal(), 0);
    }
    
    mostrarResumen() {
        console.log("\n=== RESUMEN DEL CARRITO ===");
        if (this.productos.length === 0) {
            console.log("El carrito está vacío");
            return;
        }
        
        this.productos.forEach(producto => {
            console.log(`${producto.nombre} - $${producto.precio} x ${producto.cantidad} = $${producto.subtotal()}`);
        });
        console.log(`\nTOTAL: $${this.calcularTotal().toFixed(2)}`);
    }
}

// Pruebas
const carrito = new Carrito();
carrito.agregarProducto(new Producto("Laptop", 1200, 1));
carrito.agregarProducto(new Producto("Mouse", 25, 2));
carrito.agregarProducto(new Producto("Teclado", 75, 1));
carrito.agregarProducto(new Producto("Mouse", 25, 1));
carrito.mostrarResumen();
class Cuenta {
    #saldo;
    
    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }
    
    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`Depósito exitoso. Saldo actual: $${this.#saldo}`);
        } else {
            console.log("Error: El monto debe ser mayor a 0");
        }
    }
    
    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
            console.log(`Retiro exitoso. Saldo actual: $${this.#saldo}`);
            return true;
        } else {
            console.log("Error: Saldo insuficiente o monto inválido");
            return false;
        }
    }
    
    get saldo() {
        return this.#saldo;
    }
    
    transferir(cuentaDestino, monto) {
        console.log(`\nIntentando transferir $${monto}...`);
        if (this.retirar(monto)) {
            cuentaDestino.depositar(monto);
            console.log("Transferencia exitosa");
        } else {
            console.log("Transferencia fallida");
        }
    }
}

class CuentaAhorro extends Cuenta {
    retirar(monto) {
        if (monto > 0 && monto <= this.saldo) {
            return super.retirar(monto);
        } else {
            console.log("Error: No se permite sobregiro en cuenta de ahorros");
            return false;
        }
    }
}

class CuentaCorriente extends Cuenta {
    #limiteSobregiro;
    
    constructor(saldoInicial = 0, limiteSobregiro = 500) {
        super(saldoInicial);
        this.#limiteSobregiro = limiteSobregiro;
    }
    
    retirar(monto) {
        const saldoDisponible = this.saldo + this.#limiteSobregiro;
        if (monto > 0 && monto <= saldoDisponible) {
            return super.retirar(monto);
        } else {
            console.log(`Error: Excede el límite de sobregiro ($${this.#limiteSobregiro})`);
            return false;
        }
    }
}

// Pruebas
console.log("=== Cuenta de Ahorros ===");
const cuentaAhorro = new CuentaAhorro(1000);
cuentaAhorro.depositar(500);
cuentaAhorro.retirar(200);
cuentaAhorro.retirar(1500);

console.log("\n=== Cuenta Corriente ===");
const cuentaCorriente = new CuentaCorriente(1000, 500);
cuentaCorriente.retirar(1200);
cuentaCorriente.retirar(400);

console.log("\n=== Transferencia ===");
const cuenta1 = new CuentaAhorro(1000);
const cuenta2 = new CuentaAhorro(500);
cuenta1.transferir(cuenta2, 300);
console.log(`Saldo cuenta 1: $${cuenta1.saldo}`);
console.log(`Saldo cuenta 2: $${cuenta2.saldo}`);
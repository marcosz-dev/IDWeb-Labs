class Notificacion {
    constructor(mensaje) {
        this.mensaje = mensaje;
    }
    
    enviar() {
        console.log(`Enviando notificación: ${this.mensaje}`);
    }
}

class Email extends Notificacion {
    constructor(mensaje, destinatario) {
        super(mensaje);
        this.destinatario = destinatario;
    }
    
    enviar() {
        console.log(`📧 Enviando Email a ${this.destinatario}: ${this.mensaje}`);
    }
}

class SMS extends Notificacion {
    constructor(mensaje, numeroTelefono) {
        super(mensaje);
        this.numeroTelefono = numeroTelefono;
    }
    
    enviar() {
        console.log(`📱 Enviando SMS al ${this.numeroTelefono}: ${this.mensaje}`);
    }
}

class Push extends Notificacion {
    constructor(mensaje, aplicacion) {
        super(mensaje);
        this.aplicacion = aplicacion;
    }
    
    enviar() {
        console.log(`🔔 Enviando notificación Push desde ${this.aplicacion}: ${this.mensaje}`);
    }
}

function procesarNotificaciones(notificaciones) {
    console.log("=== PROCESANDO NOTIFICACIONES ===\n");
    notificaciones.forEach((notificacion, index) => {
        console.log(`Notificación ${index + 1}:`);
        notificacion.enviar();
        console.log();
    });
}

// Pruebas
const notificaciones = [
    new Email("Tu pedido ha sido enviado", "cliente@email.com"),
    new SMS("Código de verificación: 123456", "+51 987654321"),
    new Push("Tienes un nuevo mensaje", "WhatsApp"),
    new Email("Promoción especial del 50%", "usuario@email.com"),
    new SMS("Tu cita es mañana a las 3pm", "+51 912345678")
];

procesarNotificaciones(notificaciones);
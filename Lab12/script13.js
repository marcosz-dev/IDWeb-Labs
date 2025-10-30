
function procesarTexto(texto) {
    function limpiarEspacios(str) {
        return str.trim().replace(/\s+/g, ' ');
    }
    
    function contarPalabras(str) {
        const limpio = limpiarEspacios(str);
        return limpio === '' ? 0 : limpio.split(' ').length;
    }
    
    const textoLimpio = limpiarEspacios(texto);
    const numeroPalabras = contarPalabras(texto);
    
    return {
        textoLimpio: textoLimpio,
        palabras: numeroPalabras
    };
}

// Llamadas de ejemplo
console.log(procesarTexto("  Hola   mundo   desde   JavaScript  "));
console.log(procesarTexto("Una sola frase"));

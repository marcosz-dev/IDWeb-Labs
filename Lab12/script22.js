function descargarArchivo(url, callback) {
    console.log("Descargando...");
    setTimeout(() => {
        callback(url);
    }, 1000);
}

// Llamada de ejemplo
descargarArchivo("https://ejemplo.com/archivo.pdf", (url) => {
    console.log(`Descarga completa de ${url}`);
});
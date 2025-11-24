function cargarMensaje(callback) {
  setTimeout(() => {
    callback("Mensaje cargado");
  }, 1000);
}

cargarMensaje(msg => console.log(msg));

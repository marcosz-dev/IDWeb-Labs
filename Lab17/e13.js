function cargarMensaje() {
  return new Promise(resolve =>
    setTimeout(() => resolve("Mensaje cargado"), 1000)
  );
}
cargarMensaje().then(m => console.log(m));

function cargarUsuario(callback) {
  const delay = Math.random() * (1500 - 800) + 800;

  setTimeout(() => {
    const usuario = { id: 1, nombre: "Juancito" };
    callback(`Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`);
  }, delay);
}

cargarUsuario(msg => console.log(msg));

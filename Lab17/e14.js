function cargarUsuario() {
  const delay = Math.random()*700+800;
  return new Promise(resolve =>
    setTimeout(() => resolve({id:1,nombre:"Juancito"}), delay)
  );
}
cargarUsuario().then(u =>
  console.log(`Usuario cargado: ${u.nombre} (ID: ${u.id})`)
);

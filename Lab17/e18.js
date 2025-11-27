async function cargarUsuario() {
  const delay=Math.random()*700+800;
  const u = await new Promise(r=>setTimeout(()=>r({id:1,nombre:"Juancito"}),delay));
  console.log(`Usuario cargado: ${u.nombre} (ID: ${u.id})`);
}
cargarUsuario();

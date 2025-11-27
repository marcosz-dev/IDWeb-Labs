async function cargarMensaje() {
  const m = await new Promise(r=>setTimeout(()=>r("Mensaje cargado"),1000));
  console.log(m);
}
cargarMensaje();

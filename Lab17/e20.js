async function procesarLista(numeros) {
  for(const n of numeros) {
    const delay=Math.random()*1000+500;
    await new Promise(r=>setTimeout(r,delay));
    console.log("Procesando "+n+"...");
  }
  console.log("Proceso completado");
}
procesarLista([1,2,3]);

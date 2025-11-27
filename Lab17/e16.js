function procesarLista(numeros) {
  return new Promise(resolve=>{
    let completados=0;
    numeros.forEach(n=>{
      const delay=Math.random()*1000+500;
      setTimeout(()=>{
        console.log("Procesando "+n+"...");
        completados++;
        if(completados===numeros.length) resolve("Proceso completado");
      },delay);
    });
  });
}
procesarLista([1,2,3]).then(m=>console.log(m));

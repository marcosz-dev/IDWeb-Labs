function procesarLista(numeros, callback) {
  let completados = 0;
  numeros.forEach(n => {
    const delay = Math.random() * 1000 + 500;
    setTimeout(() => {
      console.log("Procesando " + n + "...");
      completados++;
      if (completados === numeros.length) callback("Proceso completado");
    }, delay);
  });
}
procesarLista([1,2,3], msg => console.log(msg));

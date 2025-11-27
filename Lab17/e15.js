function dividirAsync(a,b) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      b===0 ? reject(new Error("No se puede dividir entre cero")) : resolve(a/b);
    },1500);
  });
}
dividirAsync(10,0).then(console.log).catch(e=>console.log(e.message));

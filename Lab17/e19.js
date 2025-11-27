async function dividirAsync(a,b) {
  await new Promise(r=>setTimeout(r,1500));
  if(b===0) throw new Error("No se puede dividir entre cero");
  return a/b;
}
dividirAsync(10,0).catch(e=>console.log(e.message));

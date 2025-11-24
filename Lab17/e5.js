try {
  console.log(x); // x no existe
} catch (e) {
  console.log("falló");
} finally {
  console.log("siempre se ejecuta");
}

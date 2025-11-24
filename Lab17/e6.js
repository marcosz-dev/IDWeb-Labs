function validarEdad(edad) {
  if (isNaN(edad) || edad < 0) {
    throw new Error("Edad inválida");
  }
  return "Edad correcta";
}

try {
  validarEdad(-2);
} catch (e) {
  console.log(e.message);
}

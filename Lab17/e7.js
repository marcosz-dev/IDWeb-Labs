try {
  let x = null;
  x.nombre; // TypeError
} catch (e) {
  if (e instanceof TypeError) {
    console.log("Es un TypeError:", e.message);
  } else {
    console.log("Otro tipo de error:", e.message);
  }
}

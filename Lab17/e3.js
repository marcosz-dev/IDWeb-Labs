try {
  let x = y + 1; // y no existe -> ReferenceError
} catch (e) {
  console.log("Mensaje del error:", e.message);
}

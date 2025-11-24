try {
  JSON.parse("{nombre: Juan}"); // JSON inválido
} catch (e) {
  console.log(e.name, e.message);
}

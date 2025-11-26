async function cargarUsuario() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/10");
    const usuario = await response.json();
    console.log("Nombre:", usuario.name);
    console.log("Username:", usuario.username);
    console.log("Email:", usuario.email);
  } catch (error) {
    console.error("Error:", error);
  }
}

cargarUsuario();

async function cargarUsuarios() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await response.json();
    usuarios.forEach(u => {
      console.log(u.name);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

cargarUsuarios();

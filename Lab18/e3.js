function cargarUsuario() {
  fetch("https://jsonplaceholder.typicode.com/users/10")
    .then(response => response.json())
    .then(usuario => {
      console.log("Nombre:", usuario.name);
      console.log("Username:", usuario.username);
      console.log("Email:", usuario.email);
    })
    .catch(error => console.error("Error:", error));
}

cargarUsuario();

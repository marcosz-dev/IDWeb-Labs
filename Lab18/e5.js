function cargarUsuarios() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(usuarios => {
      usuarios.forEach(u => {
        console.log(u.name);
      });
    })
    .catch(error => console.error("Error:", error));
}

cargarUsuarios();

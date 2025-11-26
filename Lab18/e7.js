const btnCargar = document.getElementById("btn-cargar");
const pNombre = document.getElementById("nombre");
const pEmail = document.getElementById("email");
const pCiudad = document.getElementById("ciudad");

btnCargar.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(response => response.json())
    .then(usuario => {
      pNombre.textContent = "Nombre: " + usuario.name;
      pEmail.textContent = "Email: " + usuario.email;
      pCiudad.textContent = "Ciudad: " + usuario.address.city;
    })
    .catch(error => console.error("Error:", error));
});

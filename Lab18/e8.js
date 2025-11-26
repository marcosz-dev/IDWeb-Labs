const btnCargar = document.getElementById("btn-cargar");
const pNombre = document.getElementById("nombre");
const pEmail = document.getElementById("email");
const pCiudad = document.getElementById("ciudad");

btnCargar.addEventListener("click", cargarUsuario);

async function cargarUsuario() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const usuario = await response.json();
    pNombre.textContent = "Nombre: " + usuario.name;
    pEmail.textContent = "Email: " + usuario.email;
    pCiudad.textContent = "Ciudad: " + usuario.address.city;
  } catch (error) {
    console.error("Error:", error);
  }
}

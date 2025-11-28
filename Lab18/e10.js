const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
function validar() {
  const v = document.getElementById("pass").value;
  document.getElementById("out").textContent = regex.test(v) ? " Contraseña fuerte" : " No cumple";
  console.log("[10] check:", regex.test(v));
}

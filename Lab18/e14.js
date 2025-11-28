const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
function check() {
  const v = document.getElementById("fecha").value;
  const ok = regex.test(v);
  document.getElementById("out").textContent = ok ? " Fecha válida" : " Formato inválido";
}

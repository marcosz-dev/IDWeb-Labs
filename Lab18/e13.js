const regex = /[.!?]+/g;
function separar() {
  const v = document.getElementById("ors").value;
  const partes = v.split(regex).filter(p => p.trim().length);
  document.getElementById("out").textContent = JSON.stringify(partes, null, 2);
}

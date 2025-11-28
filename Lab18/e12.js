const regex = /<[^>]+>/g;
function limpiar() {
  const v = document.getElementById("html").value;
  const limpio = v.replace(regex, "");
  document.getElementById("out").textContent = limpio;
}

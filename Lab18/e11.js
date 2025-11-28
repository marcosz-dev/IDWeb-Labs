const regex = /https:\/\/[^\s]+/g;
function probar() {
  const v = document.getElementById("url").value;
  const res = [...v.matchAll(regex)].map(m => m[0]);
  document.getElementById("out").textContent = res.join("\n") || "Ninguna https";
  console.log("[11] encontrados:", res);
}

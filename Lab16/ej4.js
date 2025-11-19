let original = true;
const p = document.getElementById("texto");

document.getElementById("btn").addEventListener("click", () => {
    p.textContent = original ? "Texto cambiado" : "Texto original";
    original = !original;
});

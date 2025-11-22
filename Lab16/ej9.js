const principal = document.getElementById("principal");
const miniaturas = document.querySelectorAll(".miniatura");

miniaturas.forEach(img => {
    img.addEventListener("click", () => {
        principal.src = img.src;
    });
});

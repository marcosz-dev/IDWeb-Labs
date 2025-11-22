const lista = document.getElementById("lista");

lista.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        lista.removeChild(event.target);
    }
});

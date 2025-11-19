document.getElementById("agregar").onclick = () => {
    const val = document.getElementById("texto").value.trim();
    if (val !== "") {
        const li = document.createElement("li");
        li.textContent = val;
        document.getElementById("lista").appendChild(li);
    }
};

document.getElementById("borrar").onclick = () => {
    const lista = document.getElementById("lista");
    if (lista.lastChild) lista.removeChild(lista.lastChild);
};

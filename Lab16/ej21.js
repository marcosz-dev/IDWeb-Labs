const tareasJSON = `
[
    { "titulo": "Estudiar JavaScript", "completada": true },
    { "titulo": "Leer un libro", "completada": false },
    { "titulo": "Hacer ejercicio", "completada": true }
]
`;

const tareas = JSON.parse(tareasJSON);
const ulTareas = document.getElementById("listaTareas");

tareas.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.titulo;
    li.classList.add(t.completada ? "completada" : "pendiente");
    ulTareas.appendChild(li);
});

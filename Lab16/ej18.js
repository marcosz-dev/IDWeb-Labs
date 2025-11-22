const librosJSON = `
[
    { "titulo": "La guerra del fin del mundo", "autor": "Mario Vargas Llosa" },
    { "titulo": "El Túnel", "autor": "Ernesto Sabato" },
    { "titulo": "Crimen y castigo", "autor": "Fiódor Dostoievski" }
]
`;

const libros = JSON.parse(librosJSON);
const tbody = document.getElementById("tbodyLibros");

libros.forEach(libro => {
    const tr = document.createElement("tr");
    const tdTitulo = document.createElement("td");
    const tdAutor = document.createElement("td");

    tdTitulo.textContent = libro.titulo;
    tdAutor.textContent = libro.autor;

    tr.appendChild(tdTitulo);
    tr.appendChild(tdAutor);
    tbody.appendChild(tr);
});

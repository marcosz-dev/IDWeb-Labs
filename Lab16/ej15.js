const cadenaJSON = '{"titulo":"El mundo como voluntad y representación","autor":"Schopenhauer","año":"1818"}';

const objeto = JSON.parse(cadenaJSON);

document.getElementById("resultado").textContent =
    `Título: ${objeto.titulo}`;

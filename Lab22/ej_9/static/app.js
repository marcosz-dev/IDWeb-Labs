async function cargarEquipos() {
    const response = await fetch('/equipos');
    const equipos = await response.json();
    const div = document.getElementById('lista');
    div.innerHTML = JSON.stringify(equipos, null, 2);
}
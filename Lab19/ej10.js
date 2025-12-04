async function cargarPokemon() {
    const contenedor = document.getElementById("contenedor");
    
    for (let i = 1; i <= 10; i++) {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await res.json();
            
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";
            tarjeta.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h3>${data.name.toUpperCase()}</h3>
                <p>ID: ${data.id}</p>
            `;
            contenedor.appendChild(tarjeta);
        } catch (err) {
            console.error(`Error al cargar Pokémon ${i}:`, err);
        }
    }
}

cargarPokemon();
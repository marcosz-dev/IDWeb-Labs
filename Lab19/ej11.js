async function buscarTipos() {
    const input = document.getElementById("pokemonInput").value.toLowerCase();
    const resultado = document.getElementById("resultado");
    
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        if (!res.ok) {
            throw new Error("Pokémon no encontrado");
        }
        const data = await res.json();
        
        const tipos = data.types.map(t => t.type.name).join(", ");
        
        resultado.innerHTML = `
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <h2>${data.name.toUpperCase()}</h2>
            <p><strong>Tipos:</strong> ${tipos}</p>
        `;
    } catch (err) {
        resultado.innerHTML = `<p style="color: red;">Error: ${err.message}</p>`;
    }
}
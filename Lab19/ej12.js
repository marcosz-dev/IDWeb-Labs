async function mostrarEstadisticas() {
    const input = document.getElementById("pokemonInput").value.toLowerCase();
    const resultado = document.getElementById("resultado");
    
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        if (!res.ok) {
            throw new Error("Pokémon no encontrado");
        }
        const data = await res.json();
        
        let listaStats = `<h2>${data.name.toUpperCase()}</h2><ul>`;
        
        data.stats.forEach(stat => {
            listaStats += `<li><strong>${stat.stat.name}:</strong> ${stat.base_stat}</li>`;
        });
        
        listaStats += `</ul>`;
        resultado.innerHTML = listaStats;
    } catch (err) {
        resultado.innerHTML = `<p style="color: red;">Error: ${err.message}</p>`;
    }
}
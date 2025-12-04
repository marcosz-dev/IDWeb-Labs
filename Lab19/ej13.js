async function mostrarStats() {
    const input = document.getElementById("pokemonInput").value.toLowerCase();
    const resultado = document.getElementById("resultado");
    
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        if (!res.ok) {
            throw new Error("Pokémon no encontrado");
        }
        const data = await res.json();
        
        let tablaStats = `
            <h2>${data.name.toUpperCase()}</h2>
            <table>
                <tr>
                    <th>Estadística</th>
                    <th>Valor Base</th>
                </tr>
        `;
        
        data.stats.forEach(stat => {
            tablaStats += `
                <tr>
                    <td>${stat.stat.name}</td>
                    <td>${stat.base_stat}</td>
                </tr>
            `;
        });
        
        tablaStats += `</table>`;
        resultado.innerHTML = tablaStats;
    } catch (err) {
        resultado.innerHTML = `<p style="color: red;">Error: ${err.message}</p>`;
    }
}
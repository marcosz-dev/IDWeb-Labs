let todosLosPokemon = [];
let paginaActual = 0;
const pokemonPorPagina = 3;

async function cargarTodosLosPokemon() {
    for (let i = 1; i <= 12; i++) {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await res.json();
            todosLosPokemon.push(data);
        } catch (err) {
            console.error(`Error al cargar Pokémon ${i}:`, err);
        }
    }
    mostrarPagina();
}

function mostrarPagina() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    
    const inicio = paginaActual * pokemonPorPagina;
    const fin = inicio + pokemonPorPagina;
    const pokemonMostrar = todosLosPokemon.slice(inicio, fin);
    
    pokemonMostrar.forEach(pokemon => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h3>${pokemon.name.toUpperCase()}</h3>
            <p>ID: ${pokemon.id}</p>
        `;
        contenedor.appendChild(tarjeta);
    });
    
    actualizarBotones();
}

function actualizarBotones() {
    const btnAnterior = document.getElementById("btnAnterior");
    const btnSiguiente = document.getElementById("btnSiguiente");
    
    btnAnterior.disabled = paginaActual === 0;
    btnSiguiente.disabled = (paginaActual + 1) * pokemonPorPagina >= todosLosPokemon.length;
}

function siguiente() {
    if ((paginaActual + 1) * pokemonPorPagina < todosLosPokemon.length) {
        paginaActual++;
        mostrarPagina();
    }
}

function anterior() {
    if (paginaActual > 0) {
        paginaActual--;
        mostrarPagina();
    }
}

cargarTodosLosPokemon();
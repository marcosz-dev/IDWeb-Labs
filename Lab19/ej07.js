async function listarPokemon() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await res.json();
    console.log("Primeros 20 Pokémon:");
    data.results.forEach((pokemon, i) => {
      console.log(`${i + 1}. ${pokemon.name}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
listarPokemon();


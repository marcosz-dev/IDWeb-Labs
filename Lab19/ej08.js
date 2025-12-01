async function pokemonAleatorio() {
  try {
    const id = Math.floor(Math.random() * 898) + 1;
    console.log("ID aleatorio:", id);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log("Nombre:", data.name);
    console.log("Altura:", data.height);
    console.log("Peso:", data.weight);
  } catch (error) {
    console.error("Error:", error);
  }
}
pokemonAleatorio();


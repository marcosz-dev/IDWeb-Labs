async function obtenerSprite() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    const data = await res.json();
    console.log("URL del sprite:", data.sprites.front_default);
  } catch (error) {
    console.error("Error:", error);
  }
}
obtenerSprite();


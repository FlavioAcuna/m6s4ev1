import pokemonNames from "./pokemon-data/pokemon.js";
import apiPoints from "./api-data/apiPoints.js";

let arregloPokemones = pokemonNames;
// Ejemplo de llamada a la API y manejo de la respuesta
async function fetchPokemonData(pokemonName) {
  try {
    const response = await fetch(
      `${apiPoints[0]}/${pokemonName.toLowerCase()}`
    );
    const data = await response.json();

    // Usando destructuring para extraer información
    const { name, abilities } = data;
    const abilitiesList = abilities
      .map((ability) => ability.ability.name)
      .join(", ");

    // Construir el mensaje
    const message = `¡Conoce a ${name}!\nHabilidades: ${abilitiesList}`;
    console.log(message);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
}
arregloPokemones.forEach((pokemon) => {
  fetchPokemonData(pokemon);
});

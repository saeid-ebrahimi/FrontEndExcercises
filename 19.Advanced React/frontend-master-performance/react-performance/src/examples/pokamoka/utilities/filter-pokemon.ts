import pokedex from '../pokedex.json';

export const filterPokemon = (searchQuery: string) => {
  if (!searchQuery) {
    return pokedex;
  }

  const query = searchQuery.toLowerCase();
  return pokedex.filter((pokemon) => {
    // Check name in all languages
    if (pokemon.name.english.toLowerCase().includes(query)) return true;
    if (pokemon.name.japanese.toLowerCase().includes(query)) return true;
    if (pokemon.name.chinese.toLowerCase().includes(query)) return true;
    if (pokemon.name.french.toLowerCase().includes(query)) return true;

    // Check description
    if (pokemon.description.toLowerCase().includes(query)) return true;

    // Check species
    if (pokemon.species.toLowerCase().includes(query)) return true;

    // Check types
    if (pokemon.type.some((t) => t.toLowerCase().includes(query))) return true;

    // Check abilities
    if (pokemon.profile.ability.some(([ability]) => ability.toLowerCase().includes(query)))
      return true;

    return false;
  });
};

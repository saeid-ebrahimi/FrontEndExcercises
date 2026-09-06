import { useMemo, useState } from 'react';

import { Container } from '$components/container';
import { Input } from '$components/input';
import { Pokemon } from './components/pokemon';
import { filterPokemon } from './utilities/filter-pokemon';

const Application = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPokemon = useMemo(() => filterPokemon(searchQuery), [searchQuery]);

  return (
    <Container className="space-y-8">
      <section id="filters">
        <Input
          label="Search Pokemon"
          placeholder="Search by name, type, ability, species, or description…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPokemon.map((pokemon) => (
          <Pokemon key={pokemon.id} {...pokemon} />
        ))}
      </section>
    </Container>
  );
};

export default Application;

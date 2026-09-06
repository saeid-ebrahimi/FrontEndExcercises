export interface PokemonName {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

export type PokemonType =
  | 'Normal'
  | 'Fire'
  | 'Water'
  | 'Electric'
  | 'Grass'
  | 'Ice'
  | 'Fighting'
  | 'Poison'
  | 'Ground'
  | 'Flying'
  | 'Psychic'
  | 'Bug'
  | 'Rock'
  | 'Ghost'
  | 'Dark'
  | 'Dragon'
  | 'Steel'
  | 'Fairy';

export interface BaseStats {
  HP: number;
  Attack: number;
  Defense: number;
  'Sp. Attack': number;
  'Sp. Defense': number;
  Speed: number;
}

export type EvolutionLink = [id: string, condition: string];

export interface Evolution {
  prev?: EvolutionLink;

  next?: EvolutionLink[];
}

export type AbilityFlag = 'false' | 'true';
export type AbilityEntry = [abilityName: string, isHidden: AbilityFlag];

export type Gender = 'Genderless' | `${number}:${number}`;

export interface Profile {
  height: string;
  weight: string;
  egg: string[];
  ability: AbilityEntry[];
  gender: Gender;
}

export interface PokemonImage {
  sprite: string;
  thumbnail: string;
  hires: string;
}

export interface Pokemon {
  id: number;
  name: PokemonName;
  type: PokemonType[];
  base: BaseStats;
  species: string;
  description: string;
  evolution: Evolution;
  profile: Profile;
  image: PokemonImage;
}

export type Pokedex = Pokemon[];

export interface Pokemon {
  _id: number;
  name: string;
  weight: number;
  height: number;
}

export interface PokemonListProps {
  pokemon: Pokemon[];
}

export interface PokemonDetailsProps {
  pokemon: Pokemon[];
}

export interface PokemonFormProps {
  addPokemon: (newPokemon: Omit<Pokemon, "_id">) => void;
}

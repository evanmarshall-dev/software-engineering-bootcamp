// NOTES:
// Reference: https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-router-dom/route-parameters/

import type { PokemonDetailsProps } from "../../types/pokemon";
import { useParams } from "react-router";

const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
  const { pokemonId } = useParams();

  const singlePokemon = pokemon.find(
    (currentPokemon) => currentPokemon._id === Number(pokemonId)
  );

  return (
    <>
      <h2>Pokemon Details</h2>
      {!singlePokemon ? (
        <p>No Pokemon found</p>
      ) : (
        <>
          <h3>{singlePokemon.name}</h3>
          <p>Weight: {singlePokemon.weight}</p>
          <p>Height: {singlePokemon.height}</p>
        </>
      )}
    </>
  );
};

export default PokemonDetails;

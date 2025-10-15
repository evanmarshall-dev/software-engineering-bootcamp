import { Link } from "react-router";
import type { PokemonListProps } from "../../types/pokemon";
import styles from "./PokemonList.module.scss";

const PokemonList = ({ pokemon }: PokemonListProps) => {
  return (
    <>
      <section className={styles.pokemonList}>
        <h2>Pokemon List</h2>
        {/* <ul>
          {pokemon.map((p) => (
            <li key={p._id}>{p.name}</li>
          ))}
        </ul> */}
        {/* CHANGE TO USING ROUTE PARAMS */}
        <ul>
          {pokemon.map((currentPokemon) => (
            <li key={currentPokemon._id}>
              <Link to={`/pokemon/${currentPokemon._id}`}>
                {currentPokemon.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default PokemonList;

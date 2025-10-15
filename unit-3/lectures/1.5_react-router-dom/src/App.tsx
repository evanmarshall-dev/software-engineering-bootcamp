// NOTES:
// Reference: https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-router-dom/programmatic-navigation/

import { useState } from "react";
import styles from "./App.module.scss";
import initialState from "./data/pokemon";
import PokemonList from "./components/PokemonList/PokemonList";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import PokemonForm from "./components/PokemonForm/PokemonForm";
import type { Pokemon } from "./types/pokemon";

function App() {
  const [pokemon, setPokemon] = useState(initialState);

  const addPokemon = (newPokemonData: Omit<Pokemon, "_id">) => {
    const pokemonWithId: Pokemon = {
      ...newPokemonData,
      _id: pokemon.length + 1,
    };
    setPokemon([...pokemon, pokemonWithId]);
  };

  return (
    <>
      <h1>React Router DOM</h1>
      <NavBar />
      <main className={styles.main}>
        <Routes>
          <Route path='/' element={<h2>Welcome to the home page!</h2>} />
          <Route path='/pokemon' element={<PokemonList pokemon={pokemon} />} />
          {/* <Route
            path='/pokemon/:pokemonId'
            element={<h2>Pokemon Details Page</h2>}
          /> */}
          <Route
            path='/pokemon/:pokemonId'
            element={<PokemonDetails pokemon={pokemon} />}
          />
          <Route
            path='/pokemon/new'
            element={<PokemonForm addPokemon={addPokemon} />}
          />
          <Route path='*' element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </main>
    </>
  );
}

export default App;

import React, { Suspense } from "react";

const pokemonResource = () => {
  const promise = fetch("https://pokeapi.co/api/v2/ability/")
    .then((res) => res.json())
    .catch((e) => {
      return { error: true };
    });

  throw promise;
};
const Pokemon = () => {
  return (
    <Suspense fallback={<h1>Loading Pokemon...</h1>}>
      <PokemonList />
    </Suspense>
  );
};

const PokemonList = () => {
  const pokemon = pokemonResource();

  return <pre>{JSON.stringify(pokemon, null, 2)}</pre>;
};

export default Pokemon;

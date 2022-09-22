import { FC } from "react";

const wrapPromise = (promise: any) => {
  let status = "pending";
  let result: any;

  const suspender = promise.then(
    (r: any) => {
      status = "fulfilled";
      result = r;
    },
    (e: any) => {
      status = "rejected";
      result = e;
    }
  );
  // 最初はsuspender(promiseオブジェクト)をthrowする。
  const read = () => {
    if (status === "pending") {
      throw suspender;
    } else if (status === "rejected") {
      throw result;
    } else {
      return result;
    }
  };

  return { read };
};

const getPokemonFetch = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const res = await fetch(url);
  return res.json();
};

const getPokemon = () => {
  const result = getPokemonFetch();
  // wrapPromise関数でfetchでreturnされるpromise(変数名: result)を引数で設定
  return wrapPromise(result);
};

const pokemon = getPokemon();

const OtherComponent: FC = () => {
  const data = pokemon.read();
  const pokemonResult = data.results;
  return (
    <div>
      {pokemonResult.map((pokemon: any) => {
        return <div key={pokemon.name}>{pokemon.name}</div>;
      })}
    </div>
  );
};

export default OtherComponent;

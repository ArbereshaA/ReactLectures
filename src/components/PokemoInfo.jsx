// --------------------------------------------------
// 📌 Instructions:
// 1. Use the API: https://pokeapi.co/api/v2/pokemon/{pokemonName}
// 2. Let user enter a Pokémon name and press a button
// 3. Fetch and display the Pokémon's image and types
// 4. Show loading and error states properly
// --------------------------------------------------

import React, { useState } from "react";

function PokemonInfo() {
  const [pokemonName, setPokemonName] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemon = () => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) throw new Error("Pokémon not found");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Search a Pokémon</h2>
      <input
        type="text"
        placeholder="Enter Pokémon name"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={fetchPokemon}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && (
        <div>
          <h3>{data.name.toUpperCase()}</h3>
          <img src={data.sprites.front_default} alt={data.name} />
          <p>
            Type(s):{" "}
            {data.types.map((t) => (
              <span key={t.slot}>{t.type.name} </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default PokemonInfo;

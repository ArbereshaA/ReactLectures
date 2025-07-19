// --------------------------------------------------
// 📌 Instructions:
// 1. Fetch a random joke from https://official-joke-api.appspot.com/random_joke
// 2. Show the setup and punchline
// 3. Show loading while fetching
// 4. Add a "Get New Joke" button
// --------------------------------------------------

import React, { useState, useEffect } from "react";

function RandomJoke() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = () => {
    setLoading(true);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        setLoading(false);
      })
      .catch(() => {
        setJoke({ setup: "Failed to load", punchline: "Try again later." });
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        joke && (
          <div>
            <p>
              <strong>{joke.setup}</strong>
            </p>
            <p>{joke.punchline}</p>
          </div>
        )
      )}
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
}

export default RandomJoke;

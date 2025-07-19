// --------------------------------------------------
// 📌 Instructions:
// 1. Fetch a random cat fact from https://catfact.ninja/fact
// 2. Show the fact on screen
// 3. Show loading and a button to get a new fact
// --------------------------------------------------

import React, { useEffect, useState } from "react";

function RandomCatFact() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFact = () => {
    setLoading(true);

    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setFact(data.fact);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div>
      <h2>Cat Fact</h2>
      {loading ? <p>Loading...</p> : <p>{fact}</p>}
      <button onClick={fetchFact}>Get New Fact</button>
    </div>
  );
}

export default RandomCatFact;

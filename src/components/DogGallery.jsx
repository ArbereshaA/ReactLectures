// --------------------------------------------------
// 📌 Instructions:
// 1. Fetch 3 random dog images from: https://dog.ceo/api/breeds/image/random/3
// 2. Display the images in a gallery (side by side or stacked)
// 3. Show loading while fetching
// 4. Add a "Show More Dogs" button
// --------------------------------------------------

import React, { useEffect, useState } from "react";

function DogGallery() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDogs = () => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((res) => res.json())
      .then((data) => {
        setDogs(data.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div>
      <h2>Dog Gallery</h2>
      {loading ? (
        <p>Loading dogs...</p>
      ) : (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {dogs.map((url, index) => (
            <img key={index} src={url} alt="Dog" width="200" />
          ))}
        </div>
      )}
      <button onClick={fetchDogs}>Show More Dogs</button>
    </div>
  );
}

export default DogGallery;

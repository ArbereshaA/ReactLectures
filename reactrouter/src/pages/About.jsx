import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const movies = [
    { id: 101, title: "Inception" },
    { id: 102, title: "Titanic" },
  ];
  const countries = ["Albania", "Germany"];
  const animals = ["Cat", "Dog"];

  return (
    <div>
      <h2>About Page - Choose your option</h2>

      <h3>Movies</h3>
      {movies.map((movie) => (
        <button key={movie.id} onClick={() => navigate(`/movies/${movie.id}`)}>
          {movie.title}
        </button>
      ))}

      <h3>Countries</h3>
      {countries.map((country) => (
        <button key={country} onClick={() => navigate(`/countries/${country}`)}>
          {country}
        </button>
      ))}

      <h3>Animals</h3>
      {animals.map((animal) => (
        <button key={animal} onClick={() => navigate(`/animals/${animal}`)}>
          {animal}
        </button>
      ))}
    </div>
  );
}

export default About;

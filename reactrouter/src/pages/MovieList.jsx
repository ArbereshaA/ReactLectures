import { useNavigate } from "react-router-dom";

function MovieList() {
  const navigate = useNavigate();
  const movies = [
    { id: 101, title: "Inception" },
    { id: 102, title: "Titanic" },
    { id: 103, title: "The Matrix" },
  ];

  return (
    <div>
      <h2>Movies</h2>
      {movies.map((movie) => (
        <button key={movie.id} onClick={() => navigate(`/movies/${movie.id}`)}>
          Watch {movie.title}
        </button>
      ))}
    </div>
  );
}

export default MovieList;

import { useParams } from "react-router-dom";

function MoviePage() {
  const { id } = useParams();

  return (
    <div>
      <h2>You are viewing movie #{id}</h2>
    </div>
  );
}

export default MoviePage;

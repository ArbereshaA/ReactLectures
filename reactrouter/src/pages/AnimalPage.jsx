import { useParams } from "react-router-dom";

function AnimalPage() {
  const { animalName } = useParams();

  return (
    <div>
      <h2>You selected: {animalName}</h2>
    </div>
  );
}

export default AnimalPage;

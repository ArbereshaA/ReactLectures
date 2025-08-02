import { useParams } from "react-router-dom";

function CountryPage() {
  const { countryName } = useParams();

  return (
    <div>
      <h2>You selected {countryName} 🇦🇱</h2>
    </div>
  );
}

export default CountryPage;

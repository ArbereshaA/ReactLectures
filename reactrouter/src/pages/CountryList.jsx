import { useNavigate } from "react-router-dom";

function CountryList() {
  const navigate = useNavigate();
  const countries = ["Albania", "Germany", "Japan"];

  return (
    <div>
      <h2>Countries</h2>
      {countries.map((country) => (
        <button key={country} onClick={() => navigate(`/countries/${country}`)}>
          Select {country}
        </button>
      ))}
    </div>
  );
}

export default CountryList;

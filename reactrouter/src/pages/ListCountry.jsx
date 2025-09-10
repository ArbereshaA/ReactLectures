function ListCountry(props) {
  return (
    <div>
      <h2>Countries</h2>
      <ul>
        {props.countries.map((country, index) => (
          <li key={index}>
            {country.name} - Capital: {country.capital}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListCountry;

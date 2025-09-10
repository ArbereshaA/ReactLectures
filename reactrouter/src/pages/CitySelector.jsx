import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

export default function CitySelector() {
  const { setCity } = useContext(WeatherContext);

  return (
    <div>
      <button onClick={() => setCity("London")}>London</button>
      <button onClick={() => setCity("Paris")}>Paris</button>
      <button onClick={() => setCity("New York")}>New York</button>
    </div>
  );
}

import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

export default function WeatherDisplay() {
  const { city } = useContext(WeatherContext);

  const messages = {
    London: "☁️ Cloudy in London",
    Paris: "🌞 Sunny in Paris",
    "New York": "🌧️ Rainy in New York",
  };

  return <h2>{messages[city]}</h2>;
}

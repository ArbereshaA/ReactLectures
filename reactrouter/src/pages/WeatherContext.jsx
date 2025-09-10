import { createContext, useState } from "react";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [city, setCity] = useState("London");

  return (
    <WeatherContext.Provider value={{ city, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
}

// WeatherContext with city and setCity.

// CitySelector lets you pick between "London", "Paris", "New York".

// WeatherDisplay shows a dummy weather message (e.g., if city is "London", show "☁️ Cloudy in London").

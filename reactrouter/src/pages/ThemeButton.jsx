import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "10px 20px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      Current Theme: {theme.toUpperCase()}
    </button>
  );
}

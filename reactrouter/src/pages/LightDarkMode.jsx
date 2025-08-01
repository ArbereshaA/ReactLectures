// 📌 Instructions:
// 1. Create a button to toggle between light and dark mode
// 2. Change background and text color depending on the mode

import React, { useState } from "react";

function LightDarkMode() {
  const [dark, setDark] = useState(false);

  const pageStyle = {
    backgroundColor: dark ? "#222" : "#f4f4f4",
    color: dark ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={pageStyle}>
      <h2>Light / Dark Mode</h2>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default LightDarkMode;

import { useState } from "react";

function LightBulbToggle() {
  const [isOn, setIsOn] = useState(false);

  function toggleLight() {
    setIsOn(!isOn);
  }

  const containerStyle = {
    textAlign: "center",
    padding: "3rem",
    transition: "background 0.5s, color 0.3s",
    backgroundColor: isOn ? "#fffbe6" : "#1e1e1e",
    color: isOn ? "#333" : "#f0f0f0",
    minHeight: "100vh",
  };

  const buttonStyle = {
    padding: "0.6rem 1.2rem",
    fontSize: "1rem",
    marginTop: "1rem",
    backgroundColor: isOn ? "#f1c40f" : "#555",
    color: isOn ? "#000" : "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s",
  };

  return (
    <div style={containerStyle}>
      <h2>The light is {isOn ? "ON " : "OFF "}</h2>
      <button style={buttonStyle} onClick={toggleLight}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>

      {isOn && <p>Brightness at 100%</p>}
    </div>
  );
}

export default LightBulbToggle;

import { useState } from "react";

function Ushtrimi1() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const calculateDouble = () => {
    const number = parseFloat(inputValue);
    if (!isNaN(number)) {
      setResult(number * 2);
    } else {
      setResult("Ju lutem shkruani një numër");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Kalkulator i Dyfishimit</h1>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Shkruaj një numër"
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={calculateDouble}>Llogarit Dyfishin</button>
      </div>

      {result !== null && (
        <h2 style={{ marginTop: "20px" }}>Rezultati: {result}</h2>
      )}
    </div>
  );
}

export default Ushtrimi1;

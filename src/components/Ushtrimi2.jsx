import { useState } from "react";

function Ushtrimi2() {
  const [count, setCount] = useState(0);

  const rritNumrin = () => {
    setCount(count + 1);
  };

  const zvogeloNumrin = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>Counter</h1>
      <h2>Value: {count}</h2>
      <button onClick={rritNumrin}>➕ Increase</button>
      <button onClick={zvogeloNumrin}>➖ Decrase</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
  );
}

export default Ushtrimi2;

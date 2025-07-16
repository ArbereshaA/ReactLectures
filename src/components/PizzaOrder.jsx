import { useState } from "react";

function PizzaOrder() {
  const [name, setName] = useState("");
  const [ordered, setOrdered] = useState(false);
  console.log(name);

  function handleOrder() {
    if (name.trim() === "") {
      alert("Please enter your name first.");
      return;
    }
    setOrdered(true);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>🍕 Order Your Pizza</h2>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleOrder}>Order</button>

      {ordered && <p>Thank you, {name}! Your pizza is on the way! </p>}
    </div>
  );
}

export default PizzaOrder;

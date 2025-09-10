// CoffeeItem.jsx
import React from "react";

export default function CoffeeItem({ name, price, onAdd }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "5px 0",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "250px",
      }}
    >
      <span>
        {name} - ${price.toFixed(2)}
      </span>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

// OrderSummary.jsx
import React from "react";

export default function OrderSummary({ order }) {
  const total = order.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>🧾 Order Summary</h2>
      {order.length === 0 ? (
        <p>No items in order.</p>
      ) : (
        <ul>
          {order.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

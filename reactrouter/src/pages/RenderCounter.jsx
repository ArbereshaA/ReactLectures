import React, { useState, useRef, useEffect } from "react";

export default function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0); // keeps value without re-render

  useEffect(() => {
    renderRef.current += 1; // increase on every render
  });

  return (
    <div>
      <h2>Counter: {count}</h2>
      <h3>Renders: {renderRef.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

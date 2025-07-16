import { useState } from "react";

export default function TextSizeChanger() {
  const [fontSize, setFontSize] = useState(16);

  return (
    <div>
      <h2>Exercise 3: Text Size</h2>
      <div style={{ fontSize: `${fontSize}px` }}>This is a sample text</div>
      <button onClick={() => setFontSize(fontSize + 2)}>+</button>
      <button onClick={() => setFontSize(fontSize - 2)}>-</button>
    </div>
  );
}

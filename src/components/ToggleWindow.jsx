import { useState } from "react";

export default function ToggleWindow() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>Exercise 1: Window Toggle</h2>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Window" : "Open Window"}
      </button>
      {isOpen && <p>The window is open 🪟</p>}
    </div>
  );
}

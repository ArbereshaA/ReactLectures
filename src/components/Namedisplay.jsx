import { useState } from "react";

export default function NameDisplay() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Exercise 2: Your Name</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <p>Hello, {name}!</p>}
    </div>
  );
}

// 📄 pages/Counter.jsx

// 📌 Instructions:
// 1. Create a number that starts at 0
// 2. Add a button to increase the number
// 3. Add a button to decrease the number
// 4. Display the number in the page

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;

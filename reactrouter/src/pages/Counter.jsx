//  Instructions:
// 1. Create a number that starts at 0
// 2. Add a button to increase the number
// 3. Add a button to decrease the number
// 4. Display the number in the page

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Counter() {
  const [count, setCount] = useState(0);

  const navigate = useNavigate(); // marrim funksionin navigate

  const handleGoHome = () => {
    navigate("/"); // dërgon te faqja Home
  };
  return (
    <div>
      <h2>Counter</h2>
      <p>Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
}

export default Counter;

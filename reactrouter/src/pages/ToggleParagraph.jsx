// 📌 Instructions:
// 1. At first, the paragraph is hidden
// 2. When the user clicks the button, the paragraph appears
// 3. Click again to hide it

import React, { useState } from "react";

function ToggleParagraph() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h2>Toggle Paragraph</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Paragraph
      </button>
      {isVisible && (
        <p>This is a simple paragraph that can be shown or hidden.</p>
      )}
    </div>
  );
}

export default ToggleParagraph;

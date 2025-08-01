// 📌 Instructions:
// 1. Create a button that toggles the visibility of a text
// 2. If the text is visible, show "Hello from React!"
// 3. Button text can be "Show Text" / "Hide Text"

import React, { useState } from "react";

function ShowText() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Show / Hide Text</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Text" : "Show Text"}
      </button>
      {show && <p>Hello from React!</p>}
    </div>
  );
}

export default ShowText;

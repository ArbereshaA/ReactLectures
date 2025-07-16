import { useState } from "react";

function TextMirror() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function clearText() {
    setText("");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h3>Live Mirror</h3>
      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={handleChange}
      />
      <button onClick={clearText}>Clear</button>

      {text !== "" ? <p>You typed: {text}</p> : <p>Please type something...</p>}
    </div>
  );
}

export default TextMirror;

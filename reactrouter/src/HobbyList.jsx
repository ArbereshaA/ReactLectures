import React from "react";

// Array prop
function HobbyList({ hobbies }) {
  return (
    <div>
      <h3>Your Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default HobbyList;

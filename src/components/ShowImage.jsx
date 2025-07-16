import { useState } from "react";
import image from "../assets/react.svg";

export default function ShowHideImage() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      <h2>Exercise 4: Show/Hide Image</h2>
      <button onClick={() => setShowImage(!showImage)}>
        {showImage ? "Hide Image" : "Show Image"}
      </button>
      {showImage && (
        <img src={image} alt="Example" style={{ marginTop: "10px" }} />
      )}
    </div>
  );
}

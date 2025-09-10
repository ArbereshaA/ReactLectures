import { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null); // starts as null

  useEffect(() => {
    inputRef.current.focus(); // when loaded, focus input
  }, []);

  return <input ref={inputRef} placeholder="Type here..." />;
}

export default FocusInput;

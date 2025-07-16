import { useEffect, useState } from "react";

function PageTitleChanger() {
  const [name, setName] = useState("React");

  useEffect(() => {
    document.title = `Hello, ${name}`;
  }, [name]);

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}
export default PageTitleChanger;

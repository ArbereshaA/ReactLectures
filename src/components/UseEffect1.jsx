import { useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Component rendered the first time");
  }, []);

  return <h1>Hello!</h1>;
}
export default Hello;

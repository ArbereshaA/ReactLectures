import { useEffect, useState } from "react";

function Timerr() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []);

  return <h1>Timer: {seconds}</h1>;
}
export default Timerr;

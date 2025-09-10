import React, { useState, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current) return; // avoid multiple intervals
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h2>Time: {time} sec</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

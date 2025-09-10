import React, { useState, useRef, useEffect } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);

  // 1Refs
  const inputRef = useRef(null); // to focus input
  const renderCount = useRef(0); // to count renders
  const prevTaskCount = useRef(0); // to store previous number of tasks

  useEffect(() => {
    renderCount.current = renderCount.current + 1; // increase render count
    prevTaskCount.current = tasks.length; // save old task count
  });

  const addTask = () => {
    if (inputRef.current.value === "") return;
    setTasks([...tasks, inputRef.current.value]);
    inputRef.current.value = ""; // clear input
    inputRef.current.focus(); // focus back on input
  };

  return (
    <div>
      <h2> To-Do App with useRef</h2>
      <input ref={inputRef} type="text" placeholder="Enter a task" />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <p> Total tasks: {tasks.length}</p>
      <p> Previous task count: {prevTaskCount.current}</p>
      <p> Render count: {renderCount.current}</p>
    </div>
  );
}

// Create a TodoList component.

// Inside it, create an array of to-do items (at least 4).

// Render each to-do inside an <li> using map().

// Use a unique key for each item.

function TodoList() {
  const todos = [
    { id: 1, task: "Buy groceries" },
    { id: 2, task: "Finish homework" },
    { id: 3, task: "Call mom" },
    { id: 4, task: "Walk the dog" },
  ];

  return (
    <div>
      <h2>My To-Do List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;

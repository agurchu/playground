import { useState } from "react";

import Todo from "./components/Todo";

function App() {
  const todos = [
    { title: "Learn React", id: 1 },
    { title: "Stories", id: 2 },
    { title: "Master react", id: 3 },
  ];

  return (
    <div className="App">
      <h1>My Todos</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} />
      ))}
    </div>
  );
}

export default App;

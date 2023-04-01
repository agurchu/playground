import { useState } from "react";

import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    { title: "Learn React", id: 1 },
    { title: "Stories", id: 2 },
    { title: "Master react", id: 3 },
  ]);

  const handleConfirmDelete = (id) => {
    const newTodos = [...todos];
    setTodos(newTodos.filter((todo) => todo.id !== id));
    useState(newTodos);
  };

  return (
    <div className="App">
      <h1>My Todos</h1>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          onConfirm={() => handleConfirmDelete(todo.id)}
        />
      ))}
    </div>
  );
}

export default App;

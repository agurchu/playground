import { useState } from "react";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Modal />
      <h1>My Todos</h1>
      <Todo title="Learn react" />
      <Todo title="Stories" />
    </div>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Polokwane", "BGF", "Joburg", "Cape Town", "Durban"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;

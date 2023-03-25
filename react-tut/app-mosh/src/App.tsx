import { useState } from "react";

import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Polokwane", "BGF", "Joburg", "Cape Town", "Durban"];
  let countries = ["USA", "RSA", "Arg", "Bra", "Pug"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={countries}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

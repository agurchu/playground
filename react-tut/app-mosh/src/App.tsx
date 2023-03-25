import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisble, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisble && (
        <Alert onClick={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="warning" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;

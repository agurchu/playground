import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="warning" onClick={() => console.log("clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;

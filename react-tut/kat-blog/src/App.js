import "./App.css";

function App() {
  const text = "Welcome to kat blog";
  const likes = 50;
  const person = { name: "jim", age: 30 };
  const fruts = ["banna ", "pear ", "apple "];
  const link = "https://www.google.com";

  fruts.push("mango ");
  return (
    <div className="App">
      <div className="content">
        <h1>{text}</h1>
        <p>Liked {likes} times </p>

        <p>
          {person.name} {person.age}
        </p>
        <p>{fruts}</p>
        <p>{Math.ceil(Math.random() * 10)}</p>

        <a href={link} target="_blank">
          Google site
        </a>
      </div>
    </div>
  );
}

export default App;

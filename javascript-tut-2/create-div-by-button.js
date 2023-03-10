//creating todo list with an array and function

const todos = ["get groceries", "wash car", "make dinner"];

render();

function addTodo() {
  const textBox = document.getElementById("todo-title");
  const title = textBox.value;
  todos.push(title);

  render();
}

function render() {
  //create a function for each todo in todos array
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach(function (todoTitle) {
    const element = document.createElement("div");
    element.innerText = todoTitle; //inserts values of todo1 variable into element
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element); //adds variable element to our page
  });
}

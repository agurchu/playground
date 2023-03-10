//creating todo list with an array and function

let todos = ["get groceries", "wash car", "make dinner"];
todos.push("another todo");

//create a function for each todo in todos array
todos.forEach(function (todoTitle) {
  let element = document.createElement("div");
  element.innerText = todoTitle; //inserts values of todo1 variable into element
  document.body.appendChild(element); //adds variable element to our page
});

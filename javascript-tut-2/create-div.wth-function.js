let todo1 = "get groceries";
let todo2 = "wash car";
let todo3 = "make dinner";

//create a function
function addTodo(todoTitle) {
  //creating div with js
  let element = document.createElement("div");
  element.innerText = todoTitle; //inserts values of todo1 variable into element
  document.body.appendChild(element); //adds variable element to our page
}

addTodo(todo1); ///calling the function
addTodo(todo2);
addTodo(todo3);

///_______________exercises
let user1 = "Katlego";
let user2 = "Jim";
let user3 = "Kat";

function greeting(firstName) {
  let element = document.createElement("div");
  element.innerText = "Hello " + firstName;
  document.body.appendChild(element);
}

greeting(user1); /// Hello Katlego
greeting(user2); /// Hello Jim
greeting(user3); // Hello Kat

/// ________________exercise 2
function toUpper(str) {
  let element = document.createElement("div");
  element.innerText = str.toUpperCase(); //this function converts str to upper case
  document.body.appendChild(element);
}

toUpper("katlego");

//_______________exercise 3

function incheToCM(inch) {
  let element = document.createElement("div");
  element.innerText = inch / 0.3937; //converts any inch value to cm
  document.body.appendChild(element);
}

incheToCM(4); //10.16002032004064 cm

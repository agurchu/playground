let todo1 = "get groceries";
let todo2 = "wash car";
let todo3 = "make dinner";

//creating div with js
let element = document.createElement("div");
element.innerText = todo1; //inserts values of todo1 variable into element
document.body.appendChild(element); //adds variable element to our page

element = document.createElement("div");
element.innerText = todo2;
document.body.appendChild(element);

element = document.createElement("div");
element.innerText = todo3;
document.body.appendChild(element);

//_____________exercise
let btn = document.createElement("button");
btn.innerText = "Click Me";
document.body.appendChild(btn); ///adding a button written click me

let title = document.querySelector("title");
title.innerText = "Katlego's Todo List";

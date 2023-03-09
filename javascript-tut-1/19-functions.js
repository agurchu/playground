function greet() {
  console.log("hello");
}

greet();

//another way of using function
let user = "katlego";

function hala(user) {
  //accept user
  return `hello!! ${user}`; //assign user
}

let str = hala(user); //pass user
console.log(str);

//fuction expression

//anynomus function
let sum = function (num1, num2) {
  return num1 + num2;
};

let results = sum(9, 5); //sum becomes a function name
console.log(results); // = 14

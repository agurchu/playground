//instead of function(user) we say (user) =>
let greet = (user) => {
  console.log("hello " + user);
  return "Hi kat";
};

console.log(greet("thabo"));

let add = (num1, num2) => num1 + num2; //in arrow function, no need for {} and return statement if u have only one statement

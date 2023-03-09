let user = "katlego"; // user is global variable
let user2 = "thabo";
// u is local variable
function greet(u) {
  return `hello ${u}!!`;
}

let str = greet(user2);
console.log(str);
//_________________________________________________________

// pass parameters (num1, num2, num3)
function add(num1, num2, num3) {
  return num1 + num2 + num3;
}

///pass arguments (4, 8, 5)
let results = add(4, 8, 5);
console.log(results);

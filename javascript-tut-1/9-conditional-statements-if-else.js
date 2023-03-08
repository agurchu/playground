let num1 = 6;
let num2 = 4;

let results = num1 > num2;

//pass a parameter ()
if (results) console.log("num1 is greater");
else console.log("num2 is greater");

console.log("Bye...");

//better write the statement without creating a variable

if (num1 > num2) {
  console.log("well done");
} else {
  console.log("not cool"); //for multible statements use {}
  console.log("try agin");
}

let num3 = 10;
let num4 = 5;
let num5 = 9;

if (num3 > num4 && num3 > num5) {
  console.log("num3 is greatest");
} else if (num4 > num5) {
  console.log("num4 is greatest");
} else {
  console.log("num5 is greatest");
}
//use else if to specify a new condition to test, if the first condition is false

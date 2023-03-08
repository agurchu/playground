/** we have:
 * while (while loop)
 * do while (do while loop)
 * for (for loop)
 */

//repeat this statement 5 times
// initialize, condition test, increment

let i = 1; //initialize

while (i <= 5) {
  //condition
  console.log("hello world", i);
  i++; //increment
}
i = 5; //initialize

while (i > 0) {
  //condition
  console.log("hi", i);
  i--; //decrement
}

i = 5; //initialize

do {
  console.log("do while", i); //checks the condition later
  i++; //increment
} while (i <= 5); //condition

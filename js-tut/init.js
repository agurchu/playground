/**Math Operators
 * Multiply *
 * Divide /
 * Exponent **
 * Modulo/reimander % (5%2=1)
 */

/**MAth Methods
 
 *Floor - rounds down (5.7 => 5) Math.floor(5.7)
 *ceil - round up (5.7 => 6) Math.ceil(5.7)
 *Random - gives a random number btween 0 & 1 (Math.random() => 0.2255636)
 */

// ** while loops
// let num = 0;

// while (num < 5) {
//   console.log("looping", num);
//   num++;
// }

const btnDiv = document.getElementById("btn");

// btnDiv.onclick = () => {
//   console.log("hello");
// };

btnDiv.addEventListener("click", () => {
  console.log("its me");
});

// document.addEventListener("keydown", () => {
//   console.log("hi"); // if press any key on the keybord it says hi
// });

document.addEventListener("keydown", (e) => {
  if (e.key == "q") {
    console.log("You pressed Q");
  } else {
    console.log("Not Q");
  }
});

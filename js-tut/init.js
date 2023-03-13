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

// DOM Manipulation (document object model)

let titleDev = document.getElementById("title");

let msg = "Goodbye my lover";

titleDev.innerText = msg;

console.log(titleDev.innerText);

titleDev.innerHTML = `<p>${msg}</p>`;

titleDev.style.background = "lightblue";

let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let greenDiv = document.getElementById("green");

const squares = document.querySelectorAll(".color-square");

//forEach
squares.forEach((div) => {
  div.style.cursor = "pointer";
});

// redDiv.onclick = () => console.log("you clicked red");
// yellowDiv.onclick = () => console.log("you clicked yellow");
// greenDiv.onclick = () => console.log("you clicked green");

const timesClicked = { red: 0, yellow: 0, green: 0 };
const clearGameDiv = document.getElementById("clearDash");

squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value]++;
    square.innerText = timesClicked[square.value];
    // console.log(timesClicked[square.value]);
  };
});

clearGameDiv.onclick = () => {
  squares.forEach((square) => (square.innerText = ""));
};

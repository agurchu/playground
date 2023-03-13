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
let container = document.querySelectorAll(".container button");
const squares = document.querySelectorAll(".color-square");

container.forEach((div) => (div.style.cursor = "pointer"));

redDiv.onclick = () => console.log("you clicked red");
yellowDiv.onclick = () => console.log("you clicked yellow");
greenDiv.onclick = () => console.log("you clicked green");

console.log(squares);

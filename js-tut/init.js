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

// ** Asynchronous programming

// promises

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    //isReady => condition, resolve runs if condition is true, reject runs if false
    isReady ? resolve("soup is ready") : reject("no soup today");
  }, 2000);
});

console.log(
  promise1
    .then((success) => console.log({ success }))
    .catch((error) => console.log({ error }))
);

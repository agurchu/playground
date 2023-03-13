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

// higher order functions
// map - loops and return
// filter
// reduce

// Map()  array method (loops and return array)

const num = [1, 2, 3, 4, 5, 6];

// const result = num.map((number) => number * 2); //(loops and return array)

// console.log(result);

//map in function

const doubleMap = (numbers) => {
  return numbers.map((num) => num * 2);
};

console.log(doubleMap(num));

// filter returns array

// const nums = (numbers, greaterThan) => {
//   return numbers.filter((num) => num > greaterThan); //filter num in a condition that num > greaterThan
// };

// console.log(nums(num, 3));

// const actors = [
//   { name: "katlego", netWorth: 200000 },
//   { name: "locus", netWorth: 10 },
//   { name: "Thabo", netWorth: 3000 },
//   { name: "jim", netWorth: 3000 },
//   { name: "looo", netWorth: 3000 },
// ];

// const result = actors.filter((actor) => actor.netWorth > 10);

// document.body.innerHTML = `<h1>${result
//   .map((actor) => actor.name)
//   .join(", ")}</h1>`;

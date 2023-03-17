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

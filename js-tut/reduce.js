//reduce

//sum: think reduce
// reduce takes in a function as an argument
// reduce loops and gives back the accumulator

// const actors = [
//   { name: "katlego", netWorth: 200000 },
//   { name: "locus", netWorth: 10 },
//   { name: "Thabo", netWorth: 3000 },
//   { name: "jim", netWorth: 3000 },
//   { name: "looo", netWorth: 3000 },
// ];

const nums = [1, 2, 3, 4];

// netWorths = actors.map((actor) => actor.netWorth);

// const results = net.reduce((pre, curr) => pre * curr);
// const results = nums.reduce((pre, curr) => pre + curr);
const results = actors.reduce((pre, curr) => pre + curr.netWorth, 0); //pass 0

console.log(results);

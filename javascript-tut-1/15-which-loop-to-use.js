// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) console.log(i);
// }

let num = 56741585;

while (num > 0) {
  console.log(num % 10);
  num = parseInt(num / 10); //convert string into number
}

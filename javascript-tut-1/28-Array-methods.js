///forEach()

let nums = [45, 33, 85, 96, 13, 67];

//forEach takes one value at the time from array nums and pass it through argument num
nums.forEach((num) => {
  console.log(num); //calls each value from array nums
});

let aliens = ["boy", "gal", "baby", "shoes", "socks", 74, 34];

aliens.forEach((alien, ind, aliens) => {
  console.log(alien, ind, aliens);
});

// filter map

let digits = [44, 34, 43, 56, 67, 55, 36];

digits
  .filter((even) => even % 2 === 0) //filter takes all values of digits based on the condition %2 === 0(even numer)
  .map((n) => n * 2) ///map method doubles each value filtered
  .forEach((digit) => {
    console.log(digit); //prints each doubled value
  });

//reduce method
console.log("reduce");
nums = [44, 34, 43, 56, 67, 55, 36];

let results = nums
  .filter((even) => even % 2 === 0) //filter takes all values of digits based on the condition %2 === 0(even numer)
  .map((n) => n * 2) ///map method doubles each value filtered
  .reduce((a, b) => a + b); ///returns one value (adds the doubled values)

console.log(results);

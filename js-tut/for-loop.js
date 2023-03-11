// for loops
//array
const fruits = [
  "banana",
  "apple",
  "orange",
  "pear",
  "banana",
  "apple",
  "orange",
  "pear",
  "banana",
  "apple",
  "orange",
  "pear",
  "banana",
  "apple",
  "orange",
  "pear",
  "banana",
  "apple",
  "orange",
  "pear",
];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

//better way of looping arrays
// for (const fruit of fruits) {
//   console.log(fruit);
// }

const numbers = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(numbers[i]);
// }

// const double = (numbers) => {
//   let result = [];
//   for (const num of numbers) {
//     result.push(num * 2);
//   }
//   return result;
// };

// const num = [7, 8, 9, 10, 11, 12];

// console.log(double(numbers));

// const HowManyLetters = (phr) => {
//   for (const letter in phr) {
//     console.log(Number(letter) + 1);
//   }
//   return { result: phr.length };
// };
// const phrase = prompt("write a phrase");

// console.log(HowManyLetters(phrase));

// const nums = [1, 2, 3, 4];
// const sunArray = (numbers) => {
//   let result = 0;
//   for (const num of numbers) {
//     console.log(num);
//     result += num;
//   }
//   return { result };
// };

// console.log(sunArray(nums));

// const nums = [1, 2, 3, 4, 5, 4, 7];
// const max = (numbers) => {
//   let result = numbers[0];
//   for (num of numbers) {
//     if (num > result) {
//       result = num;
//     }
//   }
//   return { result };
// };

// console.log(max(nums));

// const letterFrequency = (phrase) => {
//   console.log(phrase);
//   //make a freq object {}
//   let freq = {};
//   for (letter of phrase) {
//     //check if letter exists in freq
//     if (letter in freq) {
//       // increment the value by +1
//       freq[letter]++;
//     }
//     //otherwise, set the value to 1
//     else {
//       freq[letter] = 1;
//     }
//   }
//   return freq;
// };

// console.log(letterFrequency("lol,what are you doing tonight, lol"));

//word frequency
const wordFrequency = (phrase) => {
  let frequency = {};
  const split = phrase.split(" ");
  for (word of split) {
    if (word in frequency) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
};

console.log(wordFrequency("lol wow lol"));

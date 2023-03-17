const randomFruit = (fruits) => {
  const randomNumber = Math.floor(Math.random() * fruits.length);
  return fruits[randomNumber];
};
const fruits = ["banna", "apple", "pear", "orange"];
// console.log(randomFruit(fruits));

// if else if else
// rainy(1), overcast (0), sunny(-1)

const scores = [1, 0, -1];

const weatherScore = (weather) => {
  let score;
  if (weather === "rainy") {
    score = 1;
  } else if (weather === "overcast") {
    score = 0;
  } else {
    score = -1;
  }
  return score;
};

console.log(weatherScore("rainy"));

// functions

//arrow function with implicit return
const sum = (a, b) => a + b;

calcFoodTotal = (food, tip) => {
  const tipPercentage = tip / 100;
  const tipAmount = food * tipPercentage;
  total = sum(food, tipAmount);
  return total;
};

const amount = calcFoodTotal(10, 10);
console.log(amount);

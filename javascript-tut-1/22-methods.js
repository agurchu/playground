// methods  are functions inside an object

let laptop = {
  cpu: "i7",
  ram: 16,
  brand: "hp",
  greet: () => console.log("hello"),
  add: (num1, num2) => num1 + num2,
};

laptop.greet();
console.log(laptop.add(7, 5));

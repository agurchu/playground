// objects {}

const person = {
  name: "Katlego",
  shirt: "white",
};

// access object using dot notation
// console.log(person.name);
// console.log(person.shirt);

// // access object using bracket notaton
// console.log(person["name"]);
// console.log(person["shirt"]);

// // assign object
// person.phone = "0555-7857-768";
// console.log(person);

// //person2

// const person2 = {
//   name: "Qazi",
//   shirt: "black",
// };

// console.log(person2.name);

///es6 function (2 arguments)
//object
//template literals

//function and object
const introducer = (name, shirt) => {
  const person = {
    name,
    shirt,
    assets: 100000,
    liability: 50000,
    netWorth: function () {
      return this.assets - this.liability;
    },
  };
  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${
    person.shirt
  } and my net worth is $${person.netWorth()}`;
  return intro;
};

console.log(introducer("katlego", "black"));
// console.log(introducer("Leo", "blue"));

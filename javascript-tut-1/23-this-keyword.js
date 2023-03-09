// //pass the two parameters
// function fastLaptop(laptop1, laptop2) {
//   if (laptop1.cpu > laptop2.cpu) console.log(laptop1);
//   else console.log(laptop2);
// }

// let laptop1 = {
//   cpu: "i7",
//   ram: 16,
//   brand: "hp",
//   getConfig: function () {
//     console.log(this.cpu); // this keyword does not work on () =>
//   },
// };
// let laptop2 = {
//   cpu: "i5",
//   ram: 16,
//   brand: "hp",
//   getConfig: function () {
//     console.log(this.cpu); // this keyword does not work on () =>
//   },
// };

// fastLaptop(laptop1, laptop2); //pass the two object

//using a compare method

let laptop1 = {
  cpu: "i7",
  ram: 16,
  brand: "hp",
  compare: function (other) {
    if (this.cpu > other.cpu) console.log(this);
    else console.log(other);
  },

  getConfig: function () {
    console.log(this.cpu); // this keyword does not work on () =>
  },
};
let laptop2 = {
  cpu: "i5",
  ram: 16,
  brand: "hp",
  getConfig: function () {
    console.log(this.cpu); // this keyword does not work on () =>
  },
};

laptop1.compare(laptop2);

let value1 = [5, "item", 8, 2, 3]; //arrays are represented by []
let value2 = new Array("me", 8, 0, 5); ///or like this

//_______________________adding values to Arrays________________

value1.push(10); //can add another velue through push at the end
value2.push(11);
value2[3] = "thabo"; ///can add value using index number(position)
value2.unshift(4); //add data to the start of the Array

//_________________________removing data from the Array_______
value2.pop(); // pop function removes data from the end of the Array
value2.shift(); // shift removes data from the start of the array
value1.splice(2); //removes all data from index of 2
value2.splice(2, 1); //removes one value from index of 2

console.log(value1);
console.log(value2);

//_______________type of data in Array___________________

let data = [
  "kat",
  5,
  { cpu: "i7" },
  function greet() {
    console.log("hello");
  },
];

console.log(data);

data[3](); // add () if u calling a function

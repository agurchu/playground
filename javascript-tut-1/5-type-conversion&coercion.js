let num = String(8); //converts number into a string data. NB. cas sensetive
num = "123"; //converts number into a string data
num = Number("123"); //converts string into number. NB. cas sensetive

console.log(num, typeof num);

let number;

console.log(number, typeof number); // undefined undefined

number = 8;

console.log(number, typeof number); //8 number

number = number + ""; //makes the variable a string

console.log(number, typeof number); //8 string

number = number + 5; //makes the variable a number

console.log(number, typeof number); //85 string

number = number - 5; //makes the variable a number

console.log(number, typeof number); //80 number

let x = parseInt("123 katlego"); //forcely converts string into a number
console.log(x); ///123

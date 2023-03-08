let data = 5; // number
let user = "katlego"; // string

let num1 = 7.8;
console.log(typeof num1); //says number
console.log(typeof user);

num1 = 100_00_000; //use _to seperate the zeros to be able to count them
console.log(num1);

num1 = -5 / 0;
console.log(num1); //-infinity

num1 = 5 / 0;
console.log(num1); //infinity

let num = 108088058050050500505000505; //out put 1.080880580500505e+26
num = 108088058050050500505000505n; //out put 108088058050050500505000505n (add n at the end to avoid losing some data)
console.log(num + 2n); // out put 108088058050050500505000507n (use n if the num data ends with n)

/* ____data type____

>primitive(number, string, boolean, null, undefined & symbol)

>object

*/

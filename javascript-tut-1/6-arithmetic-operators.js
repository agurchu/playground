let num = 4;
//num = num + 2;
num += 2;
num++; //post increment (num = num + 1;)
++num; //pre increment (num = num + 1;)

num--; //post decrement (num = num - 1;)
--num; //pre decrement (num = num - 1;)

console.log(num);

//_________________differences
num = 4;

let x = num++; // post increment

console.log(x, num); //4 5(post increment assigns the value of num first and increment)

x = ++num; // pre increment

console.log(x, num); //6 6(increment the value of num first and then assigns it to x)

/**_____________________________ exponentials _____________ */

let result = 4 ** 2; //4^2
//or
result = Math.pow(4, 2); //4^2
console.log(result);

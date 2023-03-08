/**
 and (&)  --------------> ampersand
 or  (|)  --------------> pipe
 not (!)  --------------> exclamation
*/

let x = 7,
  y = 8,
  z = 9;

let result = x < y && x < z; //ampersand
console.log(result); //______true

z = 5;

result = x < y || x < z; //pipe (OR)

console.log(result); //______true

let n = !result; //exclamation (NOT) gives opp answer of result

console.log(n); //______false

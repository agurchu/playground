let nums = [5, 6, 7, 9, 3];
console.log(nums);
let [a, b, c, d, e] = nums; // assigns array of nums to  [a, b, c, d, e]
console.log(d); //fetches array value assigned to d

let words = "My name is Katlego mtimane".split(" "); //add " " to specify characters (.split(" ") splits the words seperate)

let [x, z, , ...f] = words; // assigns splited words to [x, z,, ...f], use ", , " to skip a value and  3 dots to include all values after f into f

console.log(f); //[ 'Katlego', 'mtimane' ]

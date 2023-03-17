/**Math Operators
 * Multiply *
 * Divide /
 * Exponent **
 * Modulo/reimander % (5%2=1)
 */

/**MAth Methods
 
 *Floor - rounds down (5.7 => 5) Math.floor(5.7)
 *ceil - round up (5.7 => 6) Math.ceil(5.7)
 *Random - gives a random number btween 0 & 1 (Math.random() => 0.2255636)
 */

// ** Classes (methods & properties)

class Car {
  constructor(name, color, speed) {
    this.name = name; // properties have "this"
    this.color = color; // properties have "this"
    this.speed = speed; // properties have "this"
    this.currentSpeed = 0;
  }
  getCurrentSpeed() {
    return currentSpeed;
  }

  zeroToSixty() {
    setTimeout(() => {
      console.log("that was fast!!");
      this.currentSpeed = 60;
      console.log(this.currentSpeed);
    }, 3000);
  }

  //methods. anything with () Under object
  drive(speed = 10) {
    this.currentSpeed += speed;
    console.log(
      `${this.name} drove ${5 / this.currentSpeed} miles at ${
        this.currentSpeed
      } km/h`
    );
  }
  //methods. anything with () Under object
  brake() {
    this.currentSpeed -= 10;
    console.log("came from street");
  }
  toZero() {
    setTimeout(() => {
      this.currentSpeed = 0;
      console.log(this.currentSpeed);
    });
  }
}

const ferrari = new Car("ferrari", "red", 250);
// console.log(ferrari.currentSpeed);
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();

// // ferrari.zeroToSixty();
// ferrari.drive();
// ferrari.brake();
// ferrari.toZero();
// console.log(ferrari.currentSpeed);

// porche , yellow, 250
const porche = new Car("porche", "yellow", 250);

// const num = [1, 2, 3, 4, 5];
// console.log(porche.color);
// num.forEach((_) => ferrari.drive(50));
// porche.zeroToSixty();

// create our own push funtion

Array.prototype.myPush = function (value) {
  return (this[this.length] = value);
};

const fruits = ["frut", "ffr", 2];
fruits.myPush(5);

console.log(fruits);

// create bank class with withdraw(), Deposit() and properties like balance

class Bank {
  constructor(accHolder, balance, accNum, cellNum) {
    (this.account_holder = accHolder),
      (this.balance = balance),
      (this.account_number = accNum),
      (this.phone_number = cellNum);
  }

  withdraw(amount) {
    return (this.balance -= amount);
  }
  deposit(amount) {
    return (this.balance += amount);
  }
}

const person1 = new Bank("katlego", 5000, "133 53 888", "063 734 2965");

person1.withdraw(50);
person1.deposit(100);
person1.withdraw(5000);
console.log(person1.balance);

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

  zeroToSixty() {
    setTimeout(() => {
      console.log("that was fast!!");
      this.currentSpeed = 60;
      console.log(this.currentSpeed);
    });
  }

  //methods. anything with () Under object
  drive() {
    this.currentSpeed += 10;
    console.log(`drove 2 miles at ${this.currentSpeed} km/h`);
  }
  //methods. anything with () Under object
  brake() {
    console.log("came from street");
  }
}

const ferrari = new Car("ferrari", "red", 250);
console.log(ferrari.currentSpeed);
ferrari.drive();

ferrari.brake();
console.log(ferrari.currentSpeed);

ferrari.zeroToSixty();
ferrari.drive();

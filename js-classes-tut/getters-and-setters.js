// ** Getters & Setters
// they are built as methods but behave like properties

class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequestArea = 0;
  }

  // getter
  get area() {
    this.numOfRequestArea++; // will show how many times area getter was called
    return this.width * this.height;
  }

  // setter
  set area(area) {
    this.width = Math.sqrt(area); // square root of area
    this.height = Math.sqrt(area); // square root of area
  }
}

const square1 = new Square(25);
console.log(square1.area); // no need to but () after .area because it's a getter
console.log(square1.area); // no need to but () after .area because it's a getter
console.log(square1.area); // no need to but () after .area because it's a getter
console.log(square1.area); // no need to but () after .area because it's a getter

square1.area = 25;
console.log(square1.width); // set individual length using area value
console.log(square1.height);

console.log(square1.numOfRequestArea); // shows how many times area getter was called

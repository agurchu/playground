// ** Static Methods

class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  static equals(a, b) {
    // static method does not use this. property
    return a.width * a.height === b.width * b.height;
  }
  static isValid(width, height) {
    return width === height;
  }
}

const square1 = new Square(4);
const square2 = new Square(3);

console.log("Equal:", Square.equals(square1, square2)); //static methodS it is called directly by class name and object
console.log("Validation:", Square.isValid(5, 5)); // checks if they aqual

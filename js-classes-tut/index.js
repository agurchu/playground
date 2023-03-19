/*
    class -> Object

    Instance Properties: what they have
        - name
        - age
        - height

    Instance methods: what they do
        - talk
        - run
        - jump

*/

class Rectangle {
  //setup
  constructor(_width, _height, _color) {
    console.log("rectangle is being created");

    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  getArea() {
    return this.width * this.height;
  }

  getDescription() {
    console.log(
      `I am a ${this.color} rectangle of ${this.width}cm x ${this.height}cm`
    );
  }
}

const myRrectangle1 = new Rectangle(5, 4, "red");
const myRrectangle2 = new Rectangle(10, 5, "blue");
console.log("Area 1: ", myRrectangle1.getArea());
console.log("Area 2: ", myRrectangle2.getArea());

myRrectangle1.getDescription();
myRrectangle2.getDescription();

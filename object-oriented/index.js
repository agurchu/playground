//factory function
function createCircle(radius) {
  return {
    //instead of const circle = {} we put return
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
circle.draw();

//constructor function (its name starts with a cap letter)

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const anotherCircle = new Circle(1);
console.log(anotherCircle);

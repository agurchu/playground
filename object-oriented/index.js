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

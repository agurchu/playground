//constructor function name must start with cap letter
function Laptops(cpu, ram, brand) {
  this.cpu = cpu;
  this.ram = ram;
  this.brand = brand;

  this.work = function () {
    console.log("solving bugs"); //can add method to it
  };
}

let laptop1 = new Laptops("i7", 16, "hp");
let laptop2 = new Laptops("i5", 8, "hp");
let laptop3 = new Laptops("i5", 8, "Dell");

console.log(laptop3);

laptop2.work();

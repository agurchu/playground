// ** Inheritance & Extends
// parent and child class

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  description() {
    console.log(`I'm ${this.name} and I'm ${this.age} years old`);
  }
}

class Programmer extends Person {
  constructor(_name, _age, _experience) {
    super(_name, _age);

    //custom behaviour
    this.yearsOfExoerience = _experience;
  }

  code() {
    console.log(`${this.name} is coding`);
  }
}

const person1 = new Person("kat", 18);
const programmer1 = new Programmer("Loka", 21, 4);

person1.description();
programmer1.code();

// can create array of objects from class
const programmers = [
  new Programmer("Dom", 45, 12),
  new Programmer("Jeff", 35, 7),
  new Programmer("John", 35, 7),
];

// function that loops each object of programmers
const developSoftware = (programmers) => {
  // Develop Sofrware

  for (let programmer of programmers) {
    programmer.code();
  }
};

developSoftware(programmers);

let alien = {
  name: "katlego", ///property for alien
  tech: "js", // property for alien
  laptop: {
    ///object inside an object ( for alien)
    cpu: "i7", //property for laptop
    ram: 4, //property for laptop
    bramd: "hp", //property for laptop
  },
};

console.log(alien);
console.log(alien.name);
delete alien.name; //this deletes the property name
console.log(alien.laptop);
console.log(alien?.laptop?.ram); // use ? when not sure of the existence of the object or property

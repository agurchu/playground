let alien = {
  name: "katlego", ///property for alien
  tech: "js", // property for alien
  laptop: {
    ///object inside an object ( for alien)
    cpu: "i7", //property for laptop
    ram: 4, //property for laptop
    brand: "hp", //property for laptop
  },
};

for (let key in alien.laptop) {
  //reffers to the property
  console.log(key, alien.laptop[key]);
}

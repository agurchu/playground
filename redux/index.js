const person = { name: "John", address: { city: "Bgf", country: "SA" } };
const updated = {
  ...person,
  address: { ...person.address, city: "Jozi" },
  name: "Bob",
  age: "24",
};

console.log(updated);

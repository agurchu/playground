/**Math Operators
 * Multiply *
 * Divide /
 * Exponent **
 * Modulo/reimander % (5%2=1)
 */

/**MAth Methods
 
 *Floor - rounds down (5.7 => 5) Math.floor(5.7)
 *ceil - round up (5.7 => 6) Math.ceil(5.7)
 *Random - gives a random number btween 0 & 1 (Math.random() => 0.2255636)
 */

// ** weather app **

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "64b26c83ffmshe693692fbe4eb3cp1fdedcjsn071ec3a22fb3",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

fetch("https://open-weather13.p.rapidapi.com/city/pretoria", options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

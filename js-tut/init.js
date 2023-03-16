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

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "64b26c83ffmshe693692fbe4eb3cp1fdedcjsn071ec3a22fb3",
//     "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
//   },
// };

/**things to fetch using api-ninja weather
 * min_temp

 * temp

 * max_temp
feels_like


 */
const apiNinjas_key = "+V1mjbWMB9QlX5LMv9V/BA==RTc898ZhuOvN2tlC";
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const weatherType = document.getElementById("weather-type");
const tempEl = document.getElementById("temp");
const minTempEl = document.getElementById("min-temp");
const maxTempEl = document.getElementById("max-temp");

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiNinjas_key,
  },
  contentType: "application/json",
};
const fetchWeather = fetch(
  `https://api.api-ninjas.com/v1/weather?city=${cityName}`,
  options
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error: ", err));

console.log(fetchWeather);

const searchCity = (city, temp, mintemp, maxtemp) => {
  cityName.innerText = cityInput.value;
  city = cityInput.value;
  tempEl.innerText = temp;
  minTempEl.innerText = mintemp;
  maxTempEl.innerText = maxtemp;
};

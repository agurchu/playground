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
// const apiNinjas_key = "+V1mjbWMB9QlX5LMv9V/BA==RTc898ZhuOvN2tlC";

// const url = "https://api.api-ninjas.com/v1/weather?city=";

// const options = {
//   method: "GET",
//   headers: {
//     "X-Api-Key": apiNinjas_key,
//   },
// };

const fetchWeather = async (city) => {
  //using WeatherAPI.com
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=facddef3b5f7416798a110826231603&q=${city}&aqi=yes `
    );
    const data = await response.json();
    document.getElementById("temp").innerText = data.current.temp_c;
    document.getElementById("city-name").innerText = data.location.name;
    document.getElementById("weather-type").innerText =
      data.current.condition.text;
    document.getElementById("cloud").innerText = data.current.cloud;
    document.getElementById("feels-like").innerText = data.current.feelslike_c;
    document.getElementById("country-name").innerText = data.location.country;
  } catch (error) {
    document.getElementById("city-name").innerText = "An error happened";
    document.getElementById("city-name").style.color = "red";
    document.getElementById("temp").innerText = "---";
    document.getElementById("feels-like").innerText = "---";
    document.getElementById("cloud").innerText = "---";
  }
};

const searchCity = () => {
  const city = document.getElementById("city-input").value;
  fetchWeather(city);
};

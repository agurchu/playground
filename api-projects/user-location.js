// ** User Location Api

const btn = document.getElementById("btn");
const api_key = "e2f3ca1334274840819aa9874a3052f5";
btn.addEventListener("click", () => {
  if (navigator.geolocation) {
    // browser supports geolocation api

    btn.innerText = "Allow to detect location";
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    btn.innerText = "Your browser does not support";
  }
});

const onSuccess = async (position) => {
  try {
    btn.innerText = "Detecting your location...";

    const { latitude, longitude } = position.coords;
    const url = ` https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`;
    const response = await fetch(url);
    data = await response.json();

    const allDetails = data.results[0].components;
    const { town, postcode, country } = allDetails;

    btn.innerText = `${town}, ${postcode}, ${country} `;
    btn.setAttribute("disabled", "true");
    console.table(allDetails);
  } catch (error) {
    btn.innerText = "Something went wrong";
  }
};

const onError = (error) => {
  console.log(error);
  if (error.code == 1) {
    btn.innerText = "You denied the request";
  } else if (error.code == 2) {
    btn.innerText = "Location not availble";
  } else {
    btn.innerText = "Something went wrong";
  }
  btn.setAttribute("disabled", "true");
};

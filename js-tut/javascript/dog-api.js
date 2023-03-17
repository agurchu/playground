/* get dog APIs
 .then - promises
  asynchronous programming
*/
const dogImageDiv = document.getElementById("dogimage");
const getDogBtn = document.getElementById("btn");

getDogBtn.onclick = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      dogImageDiv.innerHTML = `<img src="${json.message}"/>`;
    });
};

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

// ** superhero api

const superHero_Token = "3472708443009585";
const base__url = `https://superheroapi.com/api.php/${superHero_Token}`;
const btnEl = document.getElementById("btn");

const getSuperHero = (id) => {
  const hero = document.getElementById("hero");

  fetch(`${base__url}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      hero.innerHTML += `<img src="${json.image.url}" style="width: 200px;"/>`;
      const h2EL = document.createElement("h2");
      h2EL.innerText = json.name;

      hero.appendChild(h2EL);
    });

  hero.innerHTML = "";
};

const clickBtn = () => {
  let id;

  btnEl.onclick = () => {
    id = Math.ceil(Math.random() * 731);
    getSuperHero(id);
  };
};

clickBtn();

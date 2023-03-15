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

const hero = document.getElementById("hero");
const searchHeroBtn = document.getElementById("searchBtn");
const heroInput = document.getElementById("hero-input");

const getSuperHero = (id) => {
  fetch(`${base__url}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const h2EL = `${json.name}`;
      const info = `${json.work.base}`;
      hero.innerHTML = `<img src="${json.image.url}" /> <h2>${h2EL}</h2> <p>${info}</p>`;
    });
};

const searchHero = (nam) => {
  fetch(`${base__url}/search/${nam}`)
    .then((response) => response.json())
    .then((json) => {
      const heroJson = json.results[0];
      console.log(heroJson);
      const h2EL = `${heroJson.name}`;
      const info = `${heroJson.work.base}`;
      hero.innerHTML = `<img src="${heroJson.image.url}" /><h2>${h2EL}</h2> <p>${info}</p>`;
    });
};

// const clickBtn = () => {
//   let id;

//   btnEl.onclick = () => {
//     id = Math.ceil(Math.random() * 731);
//     getSuperHero(id);
//   };
// };

// clickBtn();

const randomHero = () => {
  return Math.ceil(Math.random() * 731);
};

btnEl.onclick = () => getSuperHero(randomHero());
searchHeroBtn.onclick = () => searchHero(heroInput.value);

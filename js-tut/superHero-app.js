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
      getStatsHTML(json);
    });
};

const searchHero = (nam) => {
  fetch(`${base__url}/search/${nam}`)
    .then((response) => response.json())
    .then((json) => {
      const heroJson = json.results[0];
      getStatsHTML(heroJson);
    });
};

const getStatsHTML = (character) => {
  const img = `<img src="${character.image.url}" />`;
  const h2EL = `${character.name}`;
  const info = `${character.work.base}`;
  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p style="color: darkgreen;">${stat.toUpperCase()}: ${
        character.powerstats[stat]
      }</p>`;
    })
    .join("");

  hero.innerHTML = `${img} <h2>${h2EL}</h2> <p>${info}</p> ${stats}`;
  //   console.log(stats);
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

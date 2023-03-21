const container = document.querySelector(".container"),
  optionsContainer = document.querySelector(".container__options");

const apiKey = "d1c724c4899f4e4fba3751776b75a8af";

window.onload = () => {
  requestURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
};

const country = "us";
const options = [
  "general",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

// // 1,000 requests per day
// let requestURL;

const init = () => {
  optionsContainer.innerHTML = "";
  getNews();
  createOptions();
};

// create cards from data
const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news__card");
    card.innerHTML = `<div
    class="news__image-container">
    <img src="${item.urlToImage || "./newspaper.jpg"}" alt="" />
    </div>

    <div class="news__content">
        <div class="news__title">
        ${item.title}
        </div>

        <div class="news__description">
        ${item.description || item.content || ""}
        </div>

        <a href="${item.url}" target="_blank" class="view__button">Read More</a>
    </div>`;

    container.appendChild(card);
  }
};

// News API Call

const getNews = async () => {
  container.innerHTML = "";
  let response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&general&apiKey=${apiKey}`
  );
  if (!response.ok) {
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }

  let data = await response.json();
  console.log(data.articles);
  generateUI(data.articles);
};

init();

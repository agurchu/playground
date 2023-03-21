const apiKey = "d1c724c4899f4e4fba3751776b75a8af";

url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

const getNews = () => {
  const req = new Request(url);
  fetch(req).then((response) => {
    console.log(response.json());
  });
};

getNews();

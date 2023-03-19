/* neyflix


- getTrendingNow()
  * URL : 
- getTopRated()
  * URL : 


** These functions will provide the URL you need to fetch() movies of that genere **

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 CLASS 👉 'original__movies' = Div that holds Netflix Originals
#2 ID 👉 'trending' = Div that holds trending Movies
#3 ID 👉 'top_rated' = Div that holds top rated Movies
*/

// Call the main functions the page is loaded

window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
};

const url =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";

// ** helper function that makes dynamic API calls **
const fetchMovies = (url, dom_element, path_type) => {
  //use fetch with url passed down
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("somthing went wrong");
      }
    })
    .then((data) => {
      showMovies(data, dom_element, path_type);
    })
    .catch((error) => console.log(error));
};

// ** function that displays the movies to the dom
const showMovies = (movies, dom_element, path_type) => {
  // a variable that grabs id or class
  const moviesEl = document.querySelector(dom_element);

  // loop through movies object
  for (let movie of movies.results) {
    // withing loop create an img element

    const imageElement = document.createElement("img");

    // set attribute
    imageElement.setAttribute("data-id", movie.id);

    // set source
    imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`;

    // append the imageElement
    moviesEl.appendChild(imageElement);
  }
};

fetchMovies(url, ".original__movies", "poster_path");

// ** Function that fetches Netflix Originals **
const getOriginals = () => {
  const url =
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";

  fetchMovies(url, ".original__movies", "poster_path");
};

// // ** Function that fetches Trending Movies **
const getTrendingNow = () => {
  const url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";
  fetchMovies(url, "#trending", "backdrop_path");
};

// // ** Function that fetches Top Rated Movies **
const getTopRated = () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";

  fetchMovies(url, "#top_rated", "backdrop_path");
};

// // ** BONUS **

// // // ** Fetches URL provided and returns response.json()
// const getMovieTrailer = (id) => {
//   fetch(
//     `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
//   )
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("somthing went wrong");
//       }
//     })
//     .then((data) => console.log(data));
// };

// // // ** Function that adds movie data to the DOM
// const setTrailer = (trailers) => {
//   // Set up iframe variable to hold id of the movieTrailer Element
//   const iframe
//   // Set up variable to select .movieNotFound element
//   const movieNotFound

//   // If there is a trailer add the src for it
//   if (trailers.length > 0) {
//     // add d-none class to movieNotFound and remove it from iframe

//     // add youtube link with trailers key to iframe.src
//   } else {
//     // Else remove d-none class to movieNotfound and ADD it to iframe

//   }
// }

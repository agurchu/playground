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

// neyflix

// window.onload = () => {
//   getOriginals();
//   getTrendingNow();
//   getTopRated();
// };

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

    console.log(imageElement);
    // set attribute
    imageElement.setAttribute("data-id", movie.id);
    console.log(movie);

    // set source
    imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`;

    // append the imageElement
    moviesEl.appendChild(imageElement);
  }
};

fetchMovies(url), ".original__movies", "poster_path";

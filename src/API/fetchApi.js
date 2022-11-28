const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '068daa3fa1cb36d698d38196cf58168c';
let mediaType = "all";
let timeWindow = "day";
let language = "en-US";
let page = 1;


export function fetchTrendingMovies() { 
 return fetch(`${BASE_URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`No movies`));
        })
};


export function fetchSearchMovies(searchQuery) { 
 return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&${language}&query=${searchQuery}&${page}&include_adult=false`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`No movies on demand ${searchQuery}`));
        })
};


export function fetchMovieById(movie_id) { 
   return fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&${language}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`No movie info.`));
        })
};


export function fetchMovieCast(movie_id) { 
   return fetch(`${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&${language}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`There is no information about the cast of the film.`));
        })
};


export function fetchMovieReviews(movie_id) { 
   return fetch(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&${language}&${page}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`We didn't find any reviews for this movie.`));
        })
};


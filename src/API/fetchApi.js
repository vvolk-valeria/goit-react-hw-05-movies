

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '068daa3fa1cb36d698d38196cf58168c';
let mediaType = "all";
let timeWindow = "day";
let language = "en-US";
let page = 1;


export function fetchTrendingMovies () { 
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










// const axios = require('axios').default;


// const URL = 'https://api.themoviedb.org/3/trending';

// let mediaType = 'all';
// let timeWindow = 'day';

// export async function fetchMoviesTrending(page) {
//   try {
//     const responce = await axios.get(
//       `${URL}/${mediaType}/${timeWindow}?api_key=${ApiKey}&page=${page}`
//     );
//     if (page === 1) {
//       pagination.reset(responce.data.total_results);
//     }
//     return responce.data.results;
//   } catch (error) {
//     console.error(error);
//   }
// }


// const axios = require('axios').default;

// export async function fetchFilms(inputValue, page) {
//   try {
//     const fetchResult = await axios.get(
//       `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${inputValue}&page=${page}&include_adult=false`
//     );
//     // searchFilms = false;
//     if (page === 1) {
//       pagination.reset(fetchResult.data.total_results);
//     }

//     return fetchResult.data.results;
//   } catch (error) {
//     console.error(error);
//   }
// }


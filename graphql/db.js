import fetch from 'node-fetch';

const MOVIES_LIST_URL = 'https://yts.mx/api/v2/list_movies.json?';
const MOVIE_DETAIL_URL = 'https://yts.mx/api/v2/movie_details.json?';

export const getMovies = (limit, rating) => {
  let REQUEST_URL = MOVIES_LIST_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};

export const getMovie = id => {
  let REQUEST_URL = MOVIE_DETAIL_URL;
  if (id > 0) {
    REQUEST_URL += `movie_id=${id}`;
  }
  console.log(REQUEST_URL);
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movie);
};

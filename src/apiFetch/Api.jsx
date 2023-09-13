import axios from 'axios';

export const MY_KEY = '3047fa8a1afb45f59f78389b618f1af2';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${MY_KEY}`);
  return response.data;
};

export const fetchMoviesSearch = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${MY_KEY}`
  );
  return response.data;
};

export const fetchMoviesById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${MY_KEY}`);
  return response.data;
};
export const fetchMoviesCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${MY_KEY}`
  );
  return response.data;
};
export const fetchMoviesReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}}/reviews?api_key=${MY_KEY}`
  );
  return response.data;
};

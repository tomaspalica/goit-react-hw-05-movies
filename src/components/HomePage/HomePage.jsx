import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'apiFetch/Api';
export const MY_KEY = '3047fa8a1afb45f59f78389b618f1af2';

export const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setMovieList(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      <MovieList movies={movieList}></MovieList>
    </>
  );
};

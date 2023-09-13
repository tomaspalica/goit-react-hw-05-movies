import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'apiFetch/Api';
export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '' || query === null) {
      setMovies([]);
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetchMoviesSearch(query);
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.username.value });
    e.currentTarget.reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input name="username"></input>
        <button>search</button>
        <MovieList movies={movies} />
      </form>
    </main>
  );
};

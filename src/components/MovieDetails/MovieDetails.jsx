import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MY_KEY } from 'components/HomePage/HomePage';
import { Link } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { fetchMoviesById } from 'apiFetch/Api';
export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  const backLink = useRef(location.state?.from || '/');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMoviesById(id);
        setMovieInfo(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <main>
      <Link to={backLink.current}>
        <button className={css.backButton}> go back</button>
      </Link>
      <section className={css.movieDescription}>
        <img
          src={
            movieInfo?.poster_path
              ? `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`
              : 'no Img'
          }
          alt=""
        />
        <div>
          <h2>
            {movieInfo.title} ({movieInfo?.release_date?.split('-')[0]})
          </h2>
          <p>User Score: {Math.round(movieInfo.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movieInfo.overview}</p>
          <h3>Genres</h3>
          <ul className={css.genreList}>
            {movieInfo?.genres?.map(el => (
              <li key={el.id}>{el.name}</li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h3>Additional information</h3>
        <div>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
        </div>
        <div>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </div>
      </section>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

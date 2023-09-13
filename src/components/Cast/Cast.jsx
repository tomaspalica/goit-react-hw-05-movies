import { MY_KEY } from 'components/HomePage/HomePage';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesCast } from 'apiFetch/Api';
const Cast = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMoviesCast(id);
        setMovieInfo(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <ul>
      {movieInfo?.cast?.map(actor => {
        return (
          <li key={actor.id}>
            <img
              alt={actor.name}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                  : 'No picture'
              }
            ></img>
            <p>Name: {actor.name}</p>
            <p>character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;

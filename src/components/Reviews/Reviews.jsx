import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMoviesReviews } from 'apiFetch/Api';
const Reviews = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMoviesReviews(id);
        setMovieInfo(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      {movieInfo.length !== 0 && (
        <ul>
          {movieInfo?.map(el => {
            return (
              <li key={el.id}>
                <h3>Author: {el.author_details.username}</h3>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {movieInfo.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};
export default Reviews;

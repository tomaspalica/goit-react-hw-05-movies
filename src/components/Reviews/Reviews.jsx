import { MY_KEY } from "components/HomePage/HomePage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
 const Reviews = () => {
    const {id} = useParams();
    const [movieInfo, setMovieInfo] = useState([])
    useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${MY_KEY}`)
    .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(movieData =>{
        
        
        setMovieInfo(d => movieData.results)
      })
     
    },[id])
    return(
        <>
       {movieInfo.length !== 0 && (<ul>{movieInfo?.map(el => {
        return (<li key={el.id}>
        <h3>Author: {el.author_details.username}</h3>
        <p>{el.content}</p>
        </li>)
       })}</ul>)}
       {movieInfo.length === 0 && (<div>We don't have any reviews for this movie.</div>)}
        </>
    )
}
export default Reviews
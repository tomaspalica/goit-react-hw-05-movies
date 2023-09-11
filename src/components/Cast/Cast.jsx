import { MY_KEY } from "components/HomePage/HomePage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
 const Cast = () =>{
    const {id} = useParams();
    const [movieInfo, setMovieInfo] = useState([])
    useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${MY_KEY}`)
    .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(movieData =>{
        console.log(movieData)
        
        setMovieInfo(d => movieData)
      })
     
    },[id])
return(
   <ul>{movieInfo?.cast?.map(actor => {
    return (<li key={actor.id}><img alt={actor.name} src={actor.profile_path ? `https://image.tmdb.org/t/p/w300${actor.profile_path}` : "No picture"}></img>
    <p>Name: {actor.name}</p>
    <p>character: {actor.character}</p>
    </li>)
   })}</ul>
)
}
export default Cast
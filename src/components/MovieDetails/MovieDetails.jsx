import { useParams } from "react-router-dom"
import { useState, useEffect} from "react";
import { MY_KEY } from "components/HomePage/HomePage";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDQ3ZmE4YTFhZmI0NWY1OWY3ODM4OWI2MThmMWFmMiIsInN1YiI6IjY0YjkwYjgxMTEzODZjMDBjYWY3ODExZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ODfEBkYfuHuxTVNxQqm-ilqGspVLcdU1r6qfZwFVxDQ'
    }
  };
export const MovieDetails = () => {
const [movieInfo, setMovieInfo] = useState([])
    const {id} = useParams();
useEffect(() => {
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${MY_KEY}`)
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
},[])
return (
    <div>{id}</div>
//   <h1>{movieInfo.name? `${movieInfo.name}` : `${movieInfo.title}` }</h1>
  
)
}
import { useParams,  Outlet  , useLocation} from "react-router-dom"
import { useState, useEffect, useRef} from "react";
import { MY_KEY } from "components/HomePage/HomePage";
import { Link } from "react-router-dom";
import css from './MovieDetails.module.css'
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
    const location = useLocation();
    
    const backLink = useRef(location.state?.from || '/')
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
 
<main>
 
  <Link to={backLink.current}><button className={css.backButton}> go back</button></Link>
  <section className={css.movieDescription} >
  <img src={movieInfo?.poster_path ? `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}` : 'no Img'} alt="" />
  <div>
    <h2>{movieInfo.title} ({movieInfo?.release_date?.split("-")[0]})</h2>
    <p>User Score: {Math.round(movieInfo.vote_average * 10)}%</p>
    <h3>Overview</h3>
    <p>{movieInfo.overview}</p>
    <h3>Genres</h3>
    <ul className={css.genreList}>{movieInfo?.genres?.map(el => <li  key={el.id}>{el.name}</li>)}</ul>
  </div>
  </section>
<section>
  <h3>Additional information</h3>
<div><Link to={`/movies/${id}/cast`}>Cast</Link></div>
<div><Link to={`/movies/${id}/reviews`}>Reviews</Link></div>
</section>
<section>
<Outlet />
</section>
</main>
  
)
}
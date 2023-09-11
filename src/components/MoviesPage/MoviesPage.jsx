import { MovieList } from "components/MovieList/MovieList";
import { useState, useEffect } from "react"
import {  useSearchParams} from "react-router-dom"
import { MY_KEY } from "components/HomePage/HomePage";
export const MoviesPage = () => {
    

const [movies, setMovies] = useState([])
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get("query");

    useEffect(() =>{
      if (query === "" || query === null) {
        setMovies([])
        return
      };

fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${MY_KEY}`)
.then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(movieData =>{
    
setMovies(movieData.results)
  })
    },[query])


    const handleSubmit = (e) =>{
        e.preventDefault();
        setSearchParams({ query: e.currentTarget.elements.username.value})
        e.currentTarget.reset()
    }

    return(
        <main>
        <form onSubmit={handleSubmit}>
        <input name="username" ></input>
        <button>search</button>
        <MovieList movies={movies}/>
            
        
        </form>

        </main>
    )
}
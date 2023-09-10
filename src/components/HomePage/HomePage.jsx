import { useEffect, useState } from "react"
import { MovieList } from "components/MovieList/MovieList"
export const MY_KEY = "3047fa8a1afb45f59f78389b618f1af2"

export const HomePage = () => {
const [movieList, setMovieList] = useState([])
    useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${MY_KEY}`)
    .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(movieData => {
        console.log(movieData.results)
        setMovieList(movieData.results)
        console.log(movieList)
      })
},[])

    return(
       <>
       <h1>Trending today</h1>
<MovieList movies={movieList}></MovieList>
      
       </> 
    )
}
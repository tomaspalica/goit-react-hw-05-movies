import { useState, useEffect } from "react"
import { MY_KEY } from "components/HomePage/HomePage"
import { NavLink } from "react-router-dom"
export const MoviesPage = () => {
    const [isSubmited, setIsSubmited] = useState(false)
const [search, setSearch] = useState("")
const [movies, setMovies] = useState([])
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDQ3ZmE4YTFhZmI0NWY1OWY3ODM4OWI2MThmMWFmMiIsInN1YiI6IjY0YjkwYjgxMTEzODZjMDBjYWY3ODExZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ODfEBkYfuHuxTVNxQqm-ilqGspVLcdU1r6qfZwFVxDQ'
    }
  };
    useEffect(() =>{
fetch(`https://api.themoviedb.org/3/search/movie?query=${search}`, options)
.then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(movieData =>{
setMovies(movieData.results)

  })
  setIsSubmited(false)
    },[search])

// const handleInput = (e) =>{
//     console.log(e.target.value)
//     setSearch(e.target.value)
// }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsSubmited(true)
        setSearch(e.target.children[0].value)
      
    }
    return(
        <main>
        <form onSubmit={handleSubmit}>
        <input ></input>
        <button>search</button>
        
            <ul>{movies.map(el =>{
                if(el.name){
                  return (<li key={el.id}><NavLink to={`/movies/${el.id}`}>{el.name}</NavLink></li>)
                } else {
                  return (<li key={el.id}><NavLink to={`/movies/${el.id}`}>{el.title}</NavLink></li>)
                }
                
               })}</ul>
        
        </form>

        </main>
    )
}
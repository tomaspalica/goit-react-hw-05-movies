import { NavLink } from "react-router-dom"
export const MovieList = ({movies}) => {

return (
    <ul>{movies.map(el =>{
        if(el.name){
          return (<li key={el.id}><NavLink to={`/movies/${el.id}`}>{el.name}</NavLink></li>)
        } else {
          return (<li key={el.id}><NavLink to={`/movies/${el.id}`}>{el.title}</NavLink></li>)
        }
        
       })}</ul>
)
}
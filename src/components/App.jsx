import { Route, Routes, NavLink} from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { NotFound } from "./NotFound/NotFound";
import { MoviesPage } from "./MoviesPage/MoviesPage";
export const App = () => {
  return (
    
   <div>
    <nav> 
      <NavLink to="/">Home</NavLink>  
      <br/>
      <NavLink to="/movies">Movies</NavLink> 
      
      </nav>
    <Routes>
    <Route path="/"  element ={<HomePage/>}/>
    <Route path="/movies" element={<MoviesPage/>}></Route>
    <Route path="*" element={<NotFound/>}/>
    </Routes></div>
  );
};

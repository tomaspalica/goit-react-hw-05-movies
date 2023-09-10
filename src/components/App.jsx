import { Route, Routes, NavLink} from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { NotFound } from "./NotFound/NotFound";
import { MoviesPage } from "./MoviesPage/MoviesPage";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { SharedLayout } from "./SharedLayout/SharedLayout";
export const App = () => {
  return (
    
   <div>
    
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path="movies" element={<MoviesPage/>}/>
    <Route path="movies/:id" element={<MovieDetails/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Route>
    </Routes></div>
  );
};

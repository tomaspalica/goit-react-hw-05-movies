import { NavLink, Outlet } from "react-router-dom"
export const SharedLayout =() => (
    <>
<header>
<nav> 
   
      <NavLink to="/">Home</NavLink>  
      <br/>
      <NavLink to="/movies">Movies</NavLink> 
      
      </nav>
      </header>
      <Outlet />
      </>
)
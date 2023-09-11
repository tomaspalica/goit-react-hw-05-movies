import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"
export const SharedLayout =() => (
    <>
<header>
<nav> 
   
      <NavLink to="/">Home</NavLink>  
      <br/>
      <NavLink to="/movies">Movies</NavLink> 
      
      </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>

      <Outlet />
      </Suspense>
      </>
)
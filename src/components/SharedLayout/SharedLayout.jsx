import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"
import styled from "styled-components";
import css from "./SharedLayout.module.css"
const StyledLink = styled(NavLink)`
  color: black;
  text-decoration : none;
  &.active {
    color: pink;
  }
`;

export const SharedLayout =() => (
    <>
<header>
<nav className={css.navigation}> 
   
      <StyledLink   to="/">Home</StyledLink >  
      
      <StyledLink  to="/movies">Movies</StyledLink > 
      
      </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>

      <Outlet />
      </Suspense>
      </>
)
import { NavLink } from "react-router-dom"
 const NotFound = () => (
    <>
    <div>the place where you are trying to go to dose not exist</div>
    <NavLink to="/"><button>take me Home</button></NavLink>
    </>
)
export default NotFound
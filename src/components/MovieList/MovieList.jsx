import { NavLink, useLocation } from 'react-router-dom';
export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies?.map(el => {
        if (el.name) {
          return (
            <li key={el.id}>
              <NavLink to={`/movies/${el.id}`} state={{ from: location }}>
                {el.name}
              </NavLink>
            </li>
          );
        } else {
          return (
            <li key={el.id}>
              <NavLink to={`/movies/${el.id}`} state={{ from: location }}>
                {el.title}
              </NavLink>
            </li>
          );
        }
      })}
    </ul>
  );
};

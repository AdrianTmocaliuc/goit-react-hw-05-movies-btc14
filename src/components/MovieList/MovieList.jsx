import React from "react";
import { Link } from "react-router-dom";

function MovieList({ listItems }) {
  // const match = useRouteMatch();
  // console.log("match", match);
  return (
    <>
      {listItems.map((movie) => {
        // console.log("movie", movie);
        return (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { movieId: movie.id, movie: movie },
              }}
            >
              {movie.name || movie.original_title}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default MovieList;

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function MovieList({ listItems }) {
  const location = useLocation();
  console.log("movie", location);
  return (
    <>
      {listItems.map((movie) => {
        return (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { movieId: movie.id, movie: movie, from: location },
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

MovieList.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      original_title: PropTypes.string,
    })
  ),
};

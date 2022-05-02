import React from "react";
import s from "./MovieDetailsItem.module.scss";
import defImage from "components/images/defMoviePicture.jpg";
import PropTypes from "prop-types";

function MovieDetailsItem({ movie }) {
  // console.log("movie", movie);
  const {
    poster_path,
    original_title,
    title,
    name,
    popularity,
    overview,
    genres,
  } = movie;
  // console.log("popularity", popularity);

  return (
    <div className={s.movieDetails}>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defImage
          }
          alt=""
          className={s.image}
        />
      </div>
      <div className={s.details}>
        <h3 className={s.title}>{original_title || title || name}</h3>
        <p>User score: {popularity}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p className={s.genres}>
          {!!genres
            ? genres.map((el) => {
                return <span key={el.name}>{el.name}</span>;
              })
            : `Not Found`}
        </p>
      </div>
    </div>
  );
}

export default MovieDetailsItem;

MovieDetailsItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    popularity: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};

import React from "react";
import s from "./MovieDetailsItem.module.scss";
import defImage from "components/images/defMoviePicture.jpg";

function MovieDetailsItem({ movie }) {
  // console.log("movie", movie);

  return (
    <div className={s.movieDetails}>
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defImage
          }
          alt=""
          className={s.image}
        />
      </div>
      <div className={s.details}>
        <h3 className={s.title}>{movie.original_title && movie.title}</h3>
        <p>User score: {movie.popularity}</p>
        <h4>Overview</h4>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p className={s.genres}>
          {movie.genres &&
            movie.genres.map((el) => {
              return <span key={el.name}>{el.name}</span>;
            })}
        </p>
      </div>
    </div>
  );
}

export default MovieDetailsItem;

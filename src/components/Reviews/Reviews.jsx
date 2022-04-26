import React, { useCallback, useEffect, useState } from "react";
import s from "./Review.module.scss";
import MoviesApi from "Services/ApiService";
const moviesApi = new MoviesApi();

function Reviews({ movieId }) {
  const [movieReviews, setMovieReviews] = useState({});

  const axiosData = useCallback(async () => {
    if (!moviesApi) {
      return;
    }
    const showMovieDet = await moviesApi.getMovieReviews(movieId);
    setMovieReviews(showMovieDet.data);
  }, [moviesApi]);

  useEffect(() => {
    axiosData();
  }, [axiosData]);

  console.log("Review=>>", movieReviews.results[0].content);
  // console.log("Review!", movieReviews.results[0].content);
  // console.log("Review!", movieReviews.results[0].content);
  return (
    <div className={s.review}>
      <></>
      <p>
        {!!movieReviews.results
          ? `${movieReviews.results[0].content}`
          : "We don't have any reviews for this movie."}
      </p>
    </div>
  );
}

export default Reviews;

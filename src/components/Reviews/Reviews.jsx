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
  }, [movieId]);

  useEffect(() => {
    axiosData();
  }, [axiosData]);

  console.log("Review=>>", movieReviews);
  // console.log("Review!", movieReviews.results[0].content);
  return (
    <div className={s.review}>
      <></>
      <p>
        {!!movieReviews?.results?.length
          ? `${movieReviews.results[0].content}`
          : "We don't have any reviews for this movie."}
      </p>
    </div>
  );
}

export default Reviews;

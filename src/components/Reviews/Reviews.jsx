import React, { useCallback, useEffect, useState } from "react";
import s from "./Review.module.scss";
import MoviesApi from "Services/ApiService";
import RenderList from "components/Utilities/RenderList";
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
      {!!movieReviews?.results?.length ? (
        <RenderList reviewsList={movieReviews.results} />
      ) : (
        "We don't have any reviews for this movie."
      )}
    </div>
  );
}

export default Reviews;

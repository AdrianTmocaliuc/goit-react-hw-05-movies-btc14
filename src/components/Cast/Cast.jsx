import RenderList from "components/Utilities/RenderList";
import React, { useCallback, useEffect, useState } from "react";

import MoviesApi from "Services/ApiService";
const moviesApi = new MoviesApi();

function Cast({ movieId }) {
  const [movieCredits, setMovieCredits] = useState({});

  const axiosData = useCallback(async () => {
    if (!moviesApi) {
      return;
    }
    const showMovieDet = await moviesApi.getMovieCredits(movieId);
    // console.log("showMovieDet", showMovieDet);
    setMovieCredits(showMovieDet.data);
  }, [movieId]);

  useEffect(() => {
    axiosData();
  }, [axiosData]);

  // console.log("movieCredits", movieCredits);
  return (
    <div>
      <RenderList castList={movieCredits.cast} />
    </div>
  );
}

export default Cast;

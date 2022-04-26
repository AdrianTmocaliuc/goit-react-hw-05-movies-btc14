import { useState, useCallback, useEffect } from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";

import MoviesApi from "Services/ApiService";
import MovieDetailsItem from "./MovieDetailsItem";
import AdditionalInformationBar from "pages/AdditionalInformationBar/AdditionalInformationBar";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";

const moviesApi = new MoviesApi();

function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState({});
  const { url } = useRouteMatch();
  const { movieId } = useParams();

  const axiosData = useCallback(async () => {
    if (!moviesApi) {
      return;
    }
    const showMovieDet = await moviesApi.getMovieDetails(movieId);
    // console.log("showMovieDet", showMovieDet);
    setMovieDetails(showMovieDet.data);
  }, [movieId]);

  useEffect(() => {
    axiosData();
  }, [axiosData]);

  // console.log("movieDetails", movieDetails);
  // console.log("movieDetails", movieDetails !== {});

  return (
    <div>
      <MovieDetailsItem movie={movieDetails} />
      {!!movieDetails ? (
        <AdditionalInformationBar path={url} />
      ) : (
        <h3>Nothing Found</h3>
      )}
      <Switch>
        <Route path={`${url}/cast`}>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${url}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </div>
  );
}

export default MovieDetailsPage;

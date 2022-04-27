import { useState, useCallback, useEffect } from "react";
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useLocation,
  // Redirect,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import MoviesApi from "Services/ApiService";
import AdditionalInformationBar from "pages/AdditionalInformationBar/AdditionalInformationBar";
import PropTypes from "prop-types";

const MovieDetailsItem = lazy(() => import("./MovieDetailsItem"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));

const moviesApi = new MoviesApi();

function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState({});
  const { url } = useRouteMatch();
  const { movieId } = useParams();

  const test = useLocation();
  const movie = test?.state?.movie;
  const checkMovie = !!Object.keys(movieDetails).length ? movieDetails : movie;
  // console.log("movieDetails", !!Object.keys(movieDetails).length);
  // console.log("checkMovie", checkMovie);

  const axiosData = useCallback(async () => {
    if (!moviesApi) {
      return;
    }
    const showMovieDet = await moviesApi.getMovieDetails(movieId);
    // console.log("showMovieDet", showMovieDet);

    if (showMovieDet) {
      setMovieDetails(showMovieDet.data);
    }
  }, [movieId]);

  console.log("movieDetails", movieDetails);
  console.log("movie", movie);

  useEffect(() => {
    axiosData();
  }, [axiosData]);
  return (
    <div>
      <MovieDetailsItem movie={checkMovie} />
      {!!Object.keys(movieDetails).length && (
        <AdditionalInformationBar path={url} />
      )}
      <Suspense fallback={<h3>In load ...</h3>}>
        <Switch>
          <Route path={`${url}/cast`}>
            <Cast movieId={movieId} />
          </Route>
          <Route path={`${url}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  movieDetails: PropTypes.object,
  movie: PropTypes.object,
  url: PropTypes.string,
  movieId: PropTypes.string,
};

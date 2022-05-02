import { useState, useCallback, useEffect, useRef } from "react";
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import MoviesApi from "Services/ApiService";
import AdditionalInformationBar from "components/AdditionalInformationBar/AdditionalInformationBar";
import PropTypes from "prop-types";
import Button from "components/Utilities/Button";

const MovieDetailsItem = lazy(() => import("./MovieDetailsItem"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));

const moviesApi = new MoviesApi();

function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState({});
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const history = useHistory();

  const location = useLocation();
  const movie = location?.state?.movie;
  const checkMovie = !!Object.keys(movieDetails).length ? movieDetails : movie;

  const moviesRef = useRef(location);
  // const testRef = useRef();
  // console.log("testRef", testRef);

  const axiosData = useCallback(async () => {
    if (!moviesApi) {
      return;
    }
    const showMovieDet = await moviesApi.getMovieDetails(movieId);

    if (showMovieDet) {
      setMovieDetails(showMovieDet.data);
    }
  }, [movieId]);

  useEffect(() => {
    axiosData();
  }, [axiosData]);

  const onClickButton = () => {
    // history.goBack();
    // history.push(history.location.state.from.pathName || "/");
    // history.push({ ...moviesRef.current.state.from });
    // console.log("history", history);
  };
  // console.log("moviesRef", moviesRef);
  // console.log("history", history);

  return (
    <div>
      <Button title="Go Back" onClick={onClickButton} />
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

import { useState, useCallback, useEffect } from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { lazy, Suspense } from "react";

import MoviesApi from "Services/ApiService";
import AdditionalInformationBar from "pages/AdditionalInformationBar/AdditionalInformationBar";

const MovieDetailsItem = lazy(() => import("./MovieDetailsItem"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));

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
    console.log("showMovieDet", showMovieDet);
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

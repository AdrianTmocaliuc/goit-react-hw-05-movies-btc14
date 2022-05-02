import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
const MenuBar = lazy(() => import("./MenuBar/MenuBar"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundView = lazy(() => import("./NotFoundView/NotFoundView"));

export const App = () => {
  return (
    <>
      <MenuBar />
      <Suspense fallback={<div>In process...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

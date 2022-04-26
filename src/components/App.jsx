import { Route } from "react-router-dom";
import MenuBar from "./MenuBar/MenuBar";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import NotFoundView from "./NotFoundView/NotFoundView";
import { Switch, Redirect } from "react-router-dom";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";

export const App = () => {
  return (
    <>
      <MenuBar />
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

        {/* <Redirect to={<NotFoundView />} /> */}
      </Switch>
    </>
  );
};

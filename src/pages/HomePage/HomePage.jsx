import MoviesApi from "Services/ApiService";
import { useCallback, useEffect, useState } from "react";
import MovieList from "components/MovieList/MovieList";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const moviesApi = new MoviesApi();

function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  const axiosData = useCallback(async () => {
    const showMovies = await moviesApi.getTrendingMovie();
    setMovies(showMovies.data.results);
  }, []);

  useEffect(() => {
    axiosData();
  }, [axiosData]);

  return (
    <div>
      <ul>{movies && <MovieList listItems={movies} />}</ul>
    </div>
  );
}

export default HomePage;

HomePage.propTypes = {
  movies: PropTypes.array,
};

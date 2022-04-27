import React from "react";
import { useCallback, useEffect, useState } from "react";
import FormInput from "components/FormInput/FormInput";
import MovieList from "components/MovieList/MovieList";
import MoviesApi from "Services/ApiService";
import PropTypes from "prop-types";

const moviesApi = new MoviesApi();

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [inputText, setInputText] = useState("");

  const axiosData = useCallback(async () => {
    if (!inputText) {
      return;
    }
    const showMovies = await moviesApi.getSearchMovie(inputText);
    setMovies(showMovies.data.results);
  }, [inputText]);

  useEffect(() => {
    axiosData();
  }, [axiosData]);

  const onSubmitForm = (Text) => {
    setInputText(Text);
  };

  return (
    <div>
      <FormInput onSubmit={onSubmitForm} />
      <ul>
        <MovieList listItems={movies} />
      </ul>
    </div>
  );
}

export default MoviesPage;

MoviesPage.propTypes = {
  movies: PropTypes.array,
  inputText: PropTypes.string,
};

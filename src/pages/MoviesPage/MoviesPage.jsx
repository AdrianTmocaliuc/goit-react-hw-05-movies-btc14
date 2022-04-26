import React from "react";
import { useCallback, useEffect, useState } from "react";
import FormInput from "components/FormInput/FormInput";
import MovieList from "components/MovieList/MovieList";
import MoviesApi from "Services/ApiService";

const moviesApi = new MoviesApi();

// import { getSearchMovie } from "Services/FetchApi";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [inputText, setInputText] = useState("");

  const axiosData = useCallback(async () => {
    if (!inputText) {
      return;
    }
    // const example =
    //   "https://api.themoviedb.org/3/search/movie?api_key=f7d6a30af5958d06330f7e1173f523fb&query=as&language=en-US&page=1&include_adult=false";
    const showMovies = await moviesApi.getSearchMovie(inputText);
    setMovies(showMovies.data.results);
  }, [inputText]);

  useEffect(() => {
    axiosData();
  }, [axiosData]);

  const onSubmitForm = (Text) => {
    setInputText(Text);
  };

  console.log("movies", movies);

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

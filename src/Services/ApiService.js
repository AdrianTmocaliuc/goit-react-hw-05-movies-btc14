import axios from "axios";

//api.themoviedb.org/3/movie/550?api_key=f7d6a30af5958d06330f7e1173f523fb

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export default class MoviesApi {
  API_KEY = "f7d6a30af5958d06330f7e1173f523fb";

  constructor() {
    this.searchQuery = "";
  }

  async getTrendingMovie() {
    try {
      const response = await axios(`/trending/all/day?api_key=${this.API_KEY}`);
      return response;
    } catch (error) {
      alert("Something went wrong");
    }
  }
  async getSearchMovie(text) {
    try {
      const response = await axios(
        `/search/movie?api_key=${this.API_KEY}&query=${text}&language=en-US&page=1&include_adult=false`
      );
      return response;
    } catch (error) {
      alert("Something went wrong");
    }
  }

  async getMovieDetails(id) {
    try {
      const response = await axios(
        `/movie/${id}?api_key=${this.API_KEY}&query=${this.searchQuery}&language=en-US&page=1&&language=en-US`
      );
      return response;
    } catch (error) {
      alert("Less information !");
    }
  }
  async getMovieCredits(id) {
    try {
      const response = await axios(
        `/movie/${id}/credits?api_key=${this.API_KEY}&language=en-US`
      );
      return response;
    } catch (error) {
      alert("Something went wrong");
    }
  }

  async getMovieReviews(id) {
    try {
      const response = await axios(
        `/movie/${id}/reviews?api_key=${this.API_KEY}&language=en-US`
      );
      return response;
    } catch (error) {
      alert("Something went wrong");
    }
  }

  // get query() {
  //   return this.searchQuery;
  // }

  // set query(newSearch) {
  //   this.searchQuery = newSearch;
  // }
}

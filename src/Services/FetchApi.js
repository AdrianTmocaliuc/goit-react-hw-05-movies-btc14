const BASE_URL = "https://api.themoviedb.org/3";

async function fetchWithCatchError(url = "", config = {}) {
  const res = await fetch(url, config);
  return res.ok ? await res.json() : Promise.reject(new Error("Problem"));
}

export function getTrendingMovie() {
  return fetchWithCatchError(
    `${BASE_URL}/trending/all/day?api_key=f7d6a30af5958d06330f7e1173f523fb`
  );
}

export function getSearchMovie(searchText) {
  return fetchWithCatchError(
    `${BASE_URL}/search/movie?api_key=f7d6a30af5958d06330f7e1173f523fb&query=${searchText}&language=en-US&page=1&include_adult=false`
  );
}

export function getDetailsMovie(movie_id) {
  return fetchWithCatchError(
    `${BASE_URL}/movie/${movie_id}?api_key=f7d6a30af5958d06330f7e1173f523fb&language=en-US`
  );
}

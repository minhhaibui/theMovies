export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "57d1b83a9bfbedbc9e834590367080e6";
const tmdbEndPoint = `https://api.themoviedb.org/3/movie`;
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndPoint}/${type}?api_key=${apiKey}`,
  getMovieDetail: (movieId) => `${tmdbEndPoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndPoint}/${movieId}/${type}?api_key=${apiKey}`,
};

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config/config";
import MovieCard from "../components/movies/MovieCard";
import useDebounce from "../hooks/Usedebounce";

const MoviePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=57d1b83a9bfbedbc9e834590367080e6`
  );
  const searchDebounce = useDebounce(searchQuery, 500);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(url, fetcher);
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
    if (searchDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=57d1b83a9bfbedbc9e834590367080e6&query=${searchDebounce}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=57d1b83a9bfbedbc9e834590367080e6`
      );
    }
  }, [data, searchDebounce]);
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-700 outline-none text-white"
            placeholder="type here to search..."
            onChange={handleSearchChange}
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className=" grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;

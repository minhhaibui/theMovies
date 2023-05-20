import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config/config";
import MovieCard from "../components/movies/MovieCard";
import useDebounce from "../hooks/Usedebounce";
import ReactPaginate from "react-paginate";
const itemsPerPage = 20;
const MoviePage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=57d1b83a9bfbedbc9e834590367080e6&page=${nextPage}`
  );
  const searchDebounce = useDebounce(searchQuery, 500);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
    if (searchDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=57d1b83a9bfbedbc9e834590367080e6&query=${searchDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=57d1b83a9bfbedbc9e834590367080e6&page=${nextPage}`
      );
    }
  }, [data, searchDebounce, nextPage]);
  // pagination
  useEffect(() => {
    if (!data || !data.total_results) return;
    console.log(data.page);
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

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
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent mx-auto animate-spin"></div>
      )}
      <div className=" grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      {/* pagination */}
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          activeLinkClassName="naviga_active"
          previousLinkClassName="nav_next pagi-num"
          nextLinkClassName="nav_next pagi-num"
          className="pagination"
          pageLinkClassName="pagi-num"
        />
      </div>
    </div>
  );
};

export default MoviePage;

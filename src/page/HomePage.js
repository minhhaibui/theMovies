import React from "react";
import MovieList from "../components/movies/MovieList";

const HomePage = () => {
  return (
    <>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-3xl text-white font-bold mb-10">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-3xl text-white font-bold mb-20">
          Top rated movies
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-3xl text-white font-bold mb-10">
          Top trending movies
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </>
  );
};

export default HomePage;

import { Routes, Route } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
import HomePage from "./page/HomePage";
import Banner from "./components/Banner/Banner";
import MoviePage from "./page/MoviePage";
import MovieDetailsPage from "./page/MovieDetailsPage";
// https://api.themoviedb.org/3/search/movie?api_key=57d1b83a9bfbedbc9e834590367080e6&query='home'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movie" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

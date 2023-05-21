import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
// import HomePage from "./page/HomePage";
import Banner from "./components/Banner/Banner";
// import MoviePage from "./page/MoviePage";
// import MovieDetailsPage from "./page/MovieDetailsPage";

const HomePage = lazy(() => import("./page/HomePage"));
const MoviePage = lazy(() => import("./page/MoviePage"));
const MovieDetailsPage = lazy(() => import("./page/MovieDetailsPage"));

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
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
      </Suspense>
    </>
  );
}

export default App;

import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
// import HomePage from "./page/HomePage";
import Banner from "./components/Banner/Banner";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import MoviePage from "./page/MoviePage";
// import MovieDetailsPage from "./page/MovieDetailsPage";

const HomePage = lazy(() => import("./page/HomePage"));
const MoviePage = lazy(() => import("./page/MoviePage"));
const MovieDetailsPage = lazy(() => import("./page/MovieDetailsPage"));

// deploy
const firebaseConfig = {
  apiKey: "AIzaSyA2J2nk0EMLkVZJjyU4jzPdSkXGFCsXsRU",
  authDomain: "themovie-app-7c269.firebaseapp.com",
  projectId: "themovie-app-7c269",
  storageBucket: "themovie-app-7c269.appspot.com",
  messagingSenderId: "1066788303600",
  appId: "1:1066788303600:web:855ebfacaf60582aa3c835",
  measurementId: "G-5V9582EX8P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// deploy

function App() {
  useEffect(() => {
    document.title = "The Movie";
  }, []);
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

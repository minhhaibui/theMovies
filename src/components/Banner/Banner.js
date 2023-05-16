import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { fetcher } from "../../config/config";
import useSWR from "swr";
const Banner = () => {
  const [movieBanner, setMovieBanner] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=57d1b83a9bfbedbc9e834590367080e6`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovieBanner(data.results);
  }, [data]);
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {movieBanner.length > 0 &&
          movieBanner.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
function BannerItem({ item }) {
  const { title, poster_path } = item;
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] from-[rgba(0,0,0,0.8)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-full rounded-lg object-cover"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="px-4 py-2 border border-white rounded-md ">
            adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-md ">
            action
          </span>
          <span className="px-4 py-2 border border-white rounded-md ">
            adventure
          </span>
        </div>
        <button className="py-3 px-6 font-medium rounded-lg text-white bg-primary">
          watch now
        </button>
      </div>
    </div>
  );
}
export default Banner;

import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
const MovieCard = ({ item }) => {
  const { title, release_date, poster_path, vote_average, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col text-white p-3 bg-slate-800 rounded-lg h-full select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] rounded-lg mb-5 object-cover"
      />
      <div className="flex flex-col flex-1">
        <h2 className="font-bold text-xl mb-3">{title}</h2>
        <div className="flex justify-between text-sm opacity-50 mb-6 mt-4">
          <span>{new Date(release_date).getFullYear()}</span>
          <div className="flex justify-center items-center gap-2">
            <span>{vote_average}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
        </div>
        <Button bgColor="secondary" onClick={() => navigate(`/movie/${id}`)}>
          {" "}
          Watch Now
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;

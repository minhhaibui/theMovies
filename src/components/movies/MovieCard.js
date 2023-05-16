import { useNavigate } from "react-router-dom";

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
        <div className="flex justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button
          onClick={() => navigate(`/movie/${id}`)}
          className="py-3 px-6 w-full bg-primary rounded-lg capitalize mt-auto"
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

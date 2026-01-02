import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../Redux/watchlistSlice";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  // ✅ SAFETY: default to empty array
  const watchlist =
    useSelector((state) => state.watchlist.items) || [];

  // ✅ SAFETY: movie might be undefined
  if (!movie) return null;

  const isSaved = watchlist.some(
    (item) => item.id === movie.id
  );

  const toggleWatchlist = () => {
    if (isSaved) {
      dispatch(removeFromWatchlist(movie.id));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <div className="relative min-w-[110px] md:min-w-[200px]">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className="w-[110px] md:w-[200px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in"
      />

      {/* ✅ Watchlist button */}
      <button
        onClick={toggleWatchlist}
        className="absolute bottom-2 left-2 right-2
        bg-black/70 text-white text-xs py-1 rounded"
      >
        {isSaved ? "✓ Watchlisted" : "+ Watchlist"}
      </button>
    </div>
  );
}

export default MovieCard;

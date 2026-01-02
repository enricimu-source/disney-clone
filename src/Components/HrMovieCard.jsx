import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../Redux/watchlistSlice";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.movies);

  const isSaved = watchlist.some((m) => m.id === movie.id);

  return (
    <div>
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] rounded-lg"
      />

      <button
        onClick={() =>
          isSaved
            ? dispatch(removeFromWatchlist(movie.id))
            : dispatch(addToWatchlist(movie))
        }
        className="absolute bottom-2 right-2 bg-black/70 text-white
        text-xs px-2 py-1 rounded"
      >
        {isSaved ? "✓ Watchlisted" : "+ Watchlist"}
      </button>
    </div>
  );
}

export default HrMovieCard;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWatchlist } from "../Redux/watchlistSlice";
import { useNavigate } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Watchlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const watchlist = useSelector(
    (state) => state.watchlist.movies
  );

  return (
    <div className="px-6 py-4 text-white">

      {/* 🔙 Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-700 hover:bg-gray-600
          px-4 py-2 rounded-lg transition"
        >
          ← Back
        </button>

        <h1 className="text-2xl font-bold">
          My Watchlist
        </h1>
      </div>

      {/* Movies */}
      {watchlist.length === 0 ? (
        <p className="text-gray-400">Your watchlist is empty</p>
      ) : (
        <div className="flex gap-6 flex-wrap">
          {watchlist.map((movie) => (
            <div
              key={movie.id}
              className="w-[200px]"
            >
              <img
                src={IMAGE_BASE_URL + movie.poster_path}
                alt={movie.title}
                className="rounded-lg"
              />

              <button
                onClick={() =>
                  dispatch(removeFromWatchlist(movie.id))
                }
                className="w-full mt-2 bg-red-600
                hover:bg-red-700 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;

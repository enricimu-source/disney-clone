import { createSlice } from "@reduxjs/toolkit";

const loadFromStorage = () => {
  const data = localStorage.getItem("watchlist");
  return data ? JSON.parse(data) : [];
};

const saveToStorage = (state) => {
  localStorage.setItem("watchlist", JSON.stringify(state));
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    movies: loadFromStorage(),
  },
  reducers: {
    addToWatchlist: (state, action) => {
      const exists = state.movies.find(
        (movie) => movie.id === action.payload.id
      );
      if (!exists) {
        state.movies.push(action.payload);
        saveToStorage(state.movies);
      }
    },
    removeFromWatchlist: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
      saveToStorage(state.movies);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } =
  watchlistSlice.actions;

export default watchlistSlice.reducer;

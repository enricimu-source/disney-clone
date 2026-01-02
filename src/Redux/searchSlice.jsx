import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SEARCH_MOVIE_URL } from "../Services/GlobalApi";

export const fetchSearchMovies = createAsyncThunk(
  "search/fetchMovies",
  async (query) => {
    const res = await axios.get(SEARCH_MOVIE_URL(query));
    return res.data.results;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    movies: [],
    loading: false,
  },
  reducers: {
    clearSearch: (state) => {
      state.movies = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      });
  },
});

export const { clearSearch } = searchSlice.actions;
export default searchSlice.reducer;

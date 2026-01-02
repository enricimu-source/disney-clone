import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import watchlistReducer from "./watchlistSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    watchlist: watchlistReducer
  }
});

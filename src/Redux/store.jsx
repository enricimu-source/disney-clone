import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import watchlistReducer from "./watchlistSlice";

 const store = configureStore({
  reducer: {
    search: searchReducer,
    watchlist: watchlistReducer
  }
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import watchlistReducer from "./watchlistSlice";

 const Store = configureStore({
  reducer: {
    search: searchReducer,
    watchlist: watchlistReducer
  }
});

export default Store;
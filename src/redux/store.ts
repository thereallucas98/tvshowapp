import { configureStore } from "@reduxjs/toolkit";
import tvShowReducer from "./TvShow";

export const store = configureStore({
  reducer: {
    tvShow: tvShowReducer,
  }
});

// State 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
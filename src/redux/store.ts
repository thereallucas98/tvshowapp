import { tvmazeApi } from "./../api/tvmaze.service";
import { configureStore } from "@reduxjs/toolkit";
import tvShowReducer from "./TvShow";

export const store = configureStore({
  reducer: {
    tvShow: tvShowReducer,
    [tvmazeApi.reducerPath]: tvmazeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tvmazeApi.middleware),
});

// State
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

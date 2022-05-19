import { createSlice } from "@reduxjs/toolkit";
import { ITvShowState } from "../global/interfaces/redux";

const initialStateValue: ITvShowState = {
  items: [],
};

export const tvShowSlice = createSlice({
  name: "tvShow",
  initialState: initialStateValue,
  reducers: {
    addTvShowToFavorite: (state, action) => {
      const tvShow = action.payload;
      const hasTvShowAlreadyFavorited = state.items.findIndex(
        (item) => item.id === tvShow.id
      );

      if (hasTvShowAlreadyFavorited === -1) {
        state.items = [
          ...state.items,
          tvShow,
        ];
      }
    },

    removeTvShowFromFavorite: (state, action) => {
      const hasTvShowAlreadyFavorited = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (hasTvShowAlreadyFavorited !== -1) {
        const updatedItems = state.items.filter(
          (item) => item.id !== action.payload
        );

        state.items = updatedItems;
      }
    },
  },
});

export const { addTvShowToFavorite, removeTvShowFromFavorite } =
  tvShowSlice.actions;

export default tvShowSlice.reducer;

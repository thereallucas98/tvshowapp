import { Reducer } from "redux";
import { TVShowByIndexData } from "../../../global/interfaces/tvshowdata";

export interface ITvShowState {
  items: TVShowByIndexData[];
};

const INITIAL_STATE: ITvShowState = {
  items: [],
};

const tvShows: Reducer<ITvShowState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_TV_SHOW_TO_FAVORITE': {
      const { tvShows } = action.payload;

      const hasTvShowAlreadyFavorited = state.items.findIndex(item => item.id === tvShows.id);

      if (hasTvShowAlreadyFavorited === -1) {
        return {
          ...state,
          items: [
            ...state.items,
            tvShows,
          ]
        };
      } else {
        return state;
      }
      break;
    }

    case 'REMOVE_TV_SHOW_FROM_FAVORITE': {
      const hasTvShowAlreadyFavorited = state.items.findIndex(item => item.id === action.payload.tvShowId);

      if (hasTvShowAlreadyFavorited === 0) {
        const updatedItems = state.items.filter(item => item.id !== action.payload.tvShowId);

        return {
          ...state,
          items: updatedItems,
        }
      }   
    };

    default: {
      return state;
    }
  }

  return INITIAL_STATE;
}

export default tvShows;
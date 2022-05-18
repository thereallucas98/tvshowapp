import { TVShowByIndexData } from "../../../global/interfaces/tvshowdata";

export function addTvShowToFavorite(tvShows: TVShowByIndexData) {
  return {
    type: "ADD_TV_SHOW_TO_FAVORITE",
    payload: {
      tvShows,
    },
  };
}

export function removeTvShowFromFavorite(tvShowId: number) {
  return {
    type: "REMOVE_TV_SHOW_FROM_FAVORITE",
    payload: {
      tvShowId,
    },
  };
}

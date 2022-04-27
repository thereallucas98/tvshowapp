import create from "zustand";
import { persist } from "zustand/middleware";
import { TVShowByIndexData } from "../global/interfaces/tvshowdata";

type State = {
  favorites?: TVShowByIndexData[];
  favoriteTvShow: (data: TVShowByIndexData) => void;
};

export const useFavoriteTvShows = create<State>(
  persist(
    (set, get) =>
      ({
        favorites: [],
        favoriteTvShow: (data: TVShowByIndexData) => {
          const favorites = get().favorites;
          const index = favorites?.findIndex((item) => item.id === data.id);
          if (index === -1) {
            if (favorites && favorites.length > 0) {
              useFavoriteTvShows.setState({ favorites: [...favorites, data] });
            } else {
              useFavoriteTvShows.setState({ favorites: [data] });
            }
          } else {
            useFavoriteTvShows.setState({
              favorites: favorites?.filter((showId) => showId.id !== data.id),
            });
          }
        },
      } as State),
    {
      name: "useFavoriteTvShows",
    }
  )
);

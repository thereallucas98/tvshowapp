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
          console.log("16", data);

          const favorites = get().favorites;
          const index = favorites?.findIndex((item) => item.id === data.id);

          console.log("21", index);

          if (index !== 1) {
            if (favorites) {
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

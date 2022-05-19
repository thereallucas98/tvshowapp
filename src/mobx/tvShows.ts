import { action, observable } from "mobx";
import { TVShowByIndexData } from "../global/interfaces/tvshowdata";

class TvShows {
  @observable tvShows: TVShowByIndexData[] = [];

  @action
  addTvShowToFavorite = (tvShow: TVShowByIndexData) => {
    const hasTvShowAlreadyFavorited = this.tvShows.findIndex(
      (item) => item.id === tvShow.id
    );

    if (hasTvShowAlreadyFavorited === -1) {
      this.tvShows.push(tvShow);
    }
  }

  @action
  removeTvShowFromFavorite = (id: number) => {
    const hasTvShowAlreadyFavorited = this.tvShows.findIndex(
      (item) => item.id === id
    );
    if (hasTvShowAlreadyFavorited !== -1) {
      const updatedItems = this.tvShows.filter((item) => item.id !== id);

      this.tvShows = updatedItems;
    }
  }

  @observable
  getFavoriteTvShows = () => {
    return this.tvShows;
  }
 }

 export const tvShowStore = new TvShows();

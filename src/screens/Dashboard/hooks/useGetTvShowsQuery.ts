import {
  useGetTvShowsQuery,
  useGetTvShowsBySearchQuery,
} from "../../../services/tvmaze.service";

export const useGetTvShowList = ({ page = 1, serieValue = "" }) => {
  const {
    currentData: tvShows,
    isFetching: isTvShowsFetching,
    isLoading: isTvShowsLoading,
  } = useGetTvShowsQuery({ page });

  const {
    currentData: tvShowsBySearch,
    isFetching: isTvShowsBySearchFething,
    isLoading: isTvShowsBySearchLoading,
  } = useGetTvShowsBySearchQuery({ q: serieValue, page });

  return {
    tvShows,
    isLoadingTvShows: isTvShowsFetching || isTvShowsLoading,
    tvShowsBySearch,
    isLoadingTvShowsBySearch: isTvShowsBySearchLoading || isTvShowsBySearchFething
  };
};

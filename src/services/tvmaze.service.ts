import { TVShowsDataResponse } from "./../global/interfaces/tvshowdata";
import { tvmazeApi } from "./../api/tvmaze.service";
import { TVShowSearchDataResponse } from "../global/interfaces/tvshowdata";
import { DataWrapper } from "./type";

/**
 * id: item.id,
        url: item.url,
        name: item.name,
        genres: item.genres,
        status: item.status,
        image: item.image,
        averageRuntime: item.averageRuntime,
 */

/**
   * id: item.show.id,
        url: item.show.url,
        name: item.show.name,
        genres: item.show.genres,
        status: item.show.status,
        image: item.show.image,
        averageRuntime: item.show.averageRuntime,
   */
interface IRequestParams {
  page: number;
}

interface IRequestSearchParams {
  q: string;
  page: number;
}

export const tvmazeServiceApi = tvmazeApi.injectEndpoints({
  endpoints: (build) => ({
    getTvShows: build.query<TVShowsDataResponse[], IRequestParams>({
      query: (params) => ({
        url: "/shows",
        params,
        method: "GET",
      }),
    }),
    getTvShowsBySearch: build.query<
      TVShowsDataResponse[],
      IRequestSearchParams
    >({
      query: (params) => ({
        url: "/search/shows",
        params,
        method: "GET",
      }),
      transformResponse: (response: TVShowSearchDataResponse[]) => {

        return response.map((item) => ({
          id: item.show.id,
          url: item.show.url,
          name: item.show.name,
          genres: item.show.genres,
          status: item.show.status,
          image: item.show.image,
          averageRuntime: item.show.averageRuntime,
        }));
      },
    }),
  }),
});

export const { useGetTvShowsQuery, useGetTvShowsBySearchQuery } =
  tvmazeServiceApi;

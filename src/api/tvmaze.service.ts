import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tvmazeApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.tvmaze.com" }),
  endpoints: () => ({}),
  reducerPath: "tvmaze-api",
  tagTypes: [],
})
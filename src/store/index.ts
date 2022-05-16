import { createStore } from "redux";
import tvShows from "./modules/shows/reducer";

const store = createStore(() => ({
  tvShows,
}));

export default store;
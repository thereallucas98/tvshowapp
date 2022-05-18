import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import { ITvShowState } from "./modules/shows/reducer";

export interface IState {
  tvShows: ITvShowState;
}

const store = createStore(rootReducer);

export default store;
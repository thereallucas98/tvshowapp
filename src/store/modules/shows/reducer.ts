import { Reducer } from "redux";
import { TVShowByIndexData } from "../../../global/interfaces/tvshowdata";

interface ITvShowState {
  items: TVShowByIndexData[];
};

const INITIAL_STATE: ITvShowState = {
  items: [],
};

const tvShows: Reducer<ITvShowState> = () => {
  return INITIAL_STATE;
}

export default tvShows;
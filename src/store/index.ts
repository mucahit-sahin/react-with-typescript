import { combineReducers } from "redux";
import { MoviesState } from "../types/movies";
import { PersonsState } from "../types/persons";
import { TvSeriesState } from "../types/tv";
import movieReducer from "./reducers/movieReducer";
import personReducer from "./reducers/personReducer";
import tvReducer from "./reducers/tvReducer";

export interface AppState {
    movies: MoviesState;
    persons: PersonsState;
    tv: TvSeriesState;
}
  
const rootReducer = combineReducers<AppState>({
    movies: movieReducer,
    persons: personReducer,
    tv:tvReducer,
});

export default rootReducer;
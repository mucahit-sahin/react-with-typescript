import { combineReducers } from "redux";
import { MoviesState } from "../types/movies";
import { PersonsState } from "../types/persons";
import movieReducer from "./reducers/movieReducer";
import personReducer from "./reducers/personReducer";

export interface AppState {
    movies: MoviesState;
    persons: PersonsState;
}
  
const rootReducer = combineReducers<AppState>({
    movies: movieReducer,
    persons:personReducer
});

export default rootReducer;
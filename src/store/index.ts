import { combineReducers } from "redux";
import { MoviesState } from "../types/movies";
import movieReducer from "./reducers/movieReducer";

export interface AppState {
    movies:MoviesState
}
  
const rootReducer = combineReducers<AppState>({
    movies:movieReducer,
});

export default rootReducer;
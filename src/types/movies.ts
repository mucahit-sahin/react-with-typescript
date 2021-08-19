import { ThunkDispatch } from "redux-thunk";

export interface MoviesState {
  data: Movies ;
  loading: boolean;
  error: string;
}

export interface Movies {
  page?: number;
  results?: Movie[];
  total_pages?: number;
  total_results?: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}



interface GET_START {
    type: "GET_MOVIES_START";
}
  
interface GET_SUCCESS {
    type: "GET_MOVIES_SUCCESS";
    payload: Movies;
}
  
interface GET_ERROR {
    type: "GET_MOVIES_ERROR";
}
  
export type MovieAction = GET_START | GET_SUCCESS | GET_ERROR;

export type MovieDispatch = ThunkDispatch<
  MoviesState,
  void,
  MovieAction
>;
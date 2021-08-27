import { ThunkDispatch } from "redux-thunk";

export interface TvSeriesState {
  data: TvSeries;
  loading: boolean;
  error: string;
}
export interface TvSerie {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export interface TvSeries {
    page?: number;
    results?: TvSerie[];
    total_pages?: number;
    total_results?: number;
}

interface GET_START {
    type: "GET_TV_START";
}
  
interface GET_SUCCESS {
    type: "GET_TV_SUCCESS";
    payload: TvSeries;
}
  
interface GET_ERROR {
    type: "GET_TV_ERROR";
}

export type TvAction = GET_START | GET_SUCCESS | GET_ERROR ;

export type TvDispatch = ThunkDispatch<
  TvSeriesState,
  void,
  TvAction
>;
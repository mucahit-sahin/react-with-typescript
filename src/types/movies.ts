import { ThunkDispatch } from "redux-thunk";

export interface MoviesState {
  data: Movies ;
  movieDetail?: MovieDetail;
  movieCredit?: MovieCredit;
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
  character?: string;
}

// Movie Detail

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// -Movie Detail

// Movie Person


export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}
export interface MovieCredit {
  id: number;
  cast: Cast[];
  crew: Crew[];
}


// -Movie Person


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

interface GET_MOVIE_START {
  type: "GET_MOVIE_START";
}

interface GET_MOVIE_SUCCESS {
  type: "GET_MOVIE_SUCCESS";
  payload: MovieDetail;
}

interface GET_MOVIE_ERROR {
  type: "GET_MOVIE_ERROR";
}

interface GET_MOVIE_CREDIT_START {
  type: "GET_MOVIE_CREDIT_START";
}

interface GET_MOVIE_CREDIT_SUCCESS {
  type: "GET_MOVIE_CREDIT_SUCCESS";
  payload: MovieCredit;
}

interface GET_MOVIE_CREDIT_ERROR {
  type: "GET_MOVIE_CREDIT_ERROR";
}

export type MovieAction = GET_START | GET_SUCCESS | GET_ERROR | GET_MOVIE_START | GET_MOVIE_SUCCESS | GET_MOVIE_ERROR|GET_MOVIE_CREDIT_START|GET_MOVIE_CREDIT_SUCCESS|GET_MOVIE_CREDIT_ERROR;

export type MovieDispatch = ThunkDispatch<
  MoviesState,
  void,
  MovieAction
>;
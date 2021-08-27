import { ThunkDispatch } from "redux-thunk";

export interface TvSeriesState {
  data: TvSeries;
  tvDetails?: TvDetail;
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

// Tv Serie Detail

export interface Genre {
    id: number;
    name: string;
}

export interface LastEpisodeToAir {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

export interface NextEpisodeToAir {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path?: any;
    vote_average: number;
    vote_count: number;
}

export interface Network {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
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

export interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface TvDetail {
    backdrop_path: string;
    created_by: any[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: LastEpisodeToAir;
    name: string;
    next_episode_to_air: NextEpisodeToAir;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    seasons: Season[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

// -Tv Serie Detail


// Actions
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

interface GET_TV_SERIE_START {
    type: "GET_TV_SERIE_START";
}
  
interface GET_TV_SERIE_SUCCESS {
    type: "GET_TV_SERIE_SUCCESS";
    payload: TvDetail;
}
  
interface GET_TV_SERIE_ERROR {
    type: "GET_TV_SERIE_ERROR";
}

export type TvAction = GET_START | GET_SUCCESS | GET_ERROR |GET_TV_SERIE_START | GET_TV_SERIE_SUCCESS | GET_TV_SERIE_ERROR ;

export type TvDispatch = ThunkDispatch<
  TvSeriesState,
  void,
  TvAction
>;
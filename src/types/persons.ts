import { ThunkDispatch } from "redux-thunk";

export interface PersonsState {
    data: Persons ;
    loading: boolean;
    error: string;
}
  
export interface Persons {
    page?: number;
    results?: Person[];
    total_pages?: number;
    total_results?: number;
}

export interface Person {
    adult: boolean;
    gender: number;
    id: number;
    known_for: KnownFor[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}

export interface KnownFor {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    adult?: boolean;
    original_title: string;
    release_date: string;
    title: string;
    video?: boolean;
}



interface GET_START {
    type: "GET_PERSONS_START";
}
  
interface GET_SUCCESS {
    type: "GET_PERSONS_SUCCESS";
    payload: Persons;
}
  
interface GET_ERROR {
    type: "GET_PERSONS_ERROR";
}
  
export type PersonAction = GET_START | GET_SUCCESS | GET_ERROR;

export type PersonDispatch = ThunkDispatch<
PersonsState,
  void,
  PersonAction
>;
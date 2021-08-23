import { ThunkDispatch } from "redux-thunk";
import { Movie } from "./movies";

export interface PersonsState {
    data: Persons ;
    loading: boolean;
    error: string;
    personDetails?: PersonDetails;
    personCredits?: PersonCredits;
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

//Person Details

export interface PersonDetails {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday?: any;
    gender: number;
    homepage?: any;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string;
}

//-Person Details

// Person Credits
export interface PersonCredits {
    cast: Movie[];
    crew: any[];
    id: number;
}

// - Person Credits

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

interface GET_PERSON_START {
    type: "GET_PERSON_START";
}
  
interface GET_PERSON_SUCCESS {
    type: "GET_PERSON_SUCCESS";
    payload: PersonDetails;
}
  
interface GET_PERSON_ERROR {
    type: "GET_PERSON_ERROR";
}

interface GET_PERSON_MOVIES_START {
    type: "GET_PERSON_MOVIES_START";
}
  
interface GET_PERSON_MOVIES_SUCCESS {
    type: "GET_PERSON_MOVIES_SUCCESS";
    payload: PersonCredits;
}
  
interface GET_PERSON_MOVIES_ERROR {
    type: "GET_PERSON_MOVIES_ERROR";
}
  
export type PersonAction = GET_START | GET_SUCCESS | GET_ERROR|GET_PERSON_START | GET_PERSON_SUCCESS | GET_PERSON_ERROR|GET_PERSON_MOVIES_START|GET_PERSON_MOVIES_SUCCESS|GET_PERSON_MOVIES_ERROR;

export type PersonDispatch = ThunkDispatch<
PersonsState,
  void,
  PersonAction
>;
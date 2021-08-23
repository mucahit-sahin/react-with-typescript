import api from "../../api";
import { PersonDetails, PersonDispatch, Persons } from "../../types/persons";

export const getPopularPersons = (pageNumber:string|null) => async (dispatch: PersonDispatch) => {
    dispatch({ type: "GET_PERSONS_START" });
    try {
        const response = await api.get<Persons>(`person/popular?api_key=ce2cd2a272535ed78b02d47570778045&language=en-US&page=${pageNumber?pageNumber:"1"}`);
        dispatch({ type: "GET_PERSONS_SUCCESS" ,payload:response.data});
    } catch (error) {
        dispatch({ type: "GET_PERSONS_ERROR" });
    }
}

export const searchPerson = (pageNumber:string|null,search:string) => async (dispatch: PersonDispatch) => {
    dispatch({ type: "GET_PERSONS_START" });
    try {
        search=search.replaceAll(" ","%20")
        const response = await api.get<Persons>(`search/person?api_key=ce2cd2a272535ed78b02d47570778045&language=en-US&query=${search}&page=${pageNumber?pageNumber:"1"}&include_adult=false`);
        dispatch({ type: "GET_PERSONS_SUCCESS" ,payload:response.data});
    } catch (error) {
        dispatch({ type: "GET_PERSONS_ERROR" });
    }
}

export const getPersonDetails = (id:string) => async (dispatch: PersonDispatch) => {
    dispatch({ type: "GET_PERSON_START" });
    try {
        const response = await api.get<PersonDetails>(`person/${id}?api_key=ce2cd2a272535ed78b02d47570778045&language=en-US`);
        dispatch({ type: "GET_PERSON_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "GET_PERSON_ERROR" });
    }
}
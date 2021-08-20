import api from "../../api";
import { PersonDispatch, Persons } from "../../types/persons";

export const getPopularPersons = (pageNumber:string|null) => async (dispatch: PersonDispatch) => {
    dispatch({ type: "GET_PERSONS_START" });
    try {
        const response = await api.get<Persons>(`person/popular?api_key=ce2cd2a272535ed78b02d47570778045&language=en-US&page=${pageNumber===null?"1":pageNumber}`);
        dispatch({ type: "GET_PERSONS_SUCCESS" ,payload:response.data});
    } catch (error) {
        dispatch({ type: "GET_PERSONS_ERROR" });
    }
}
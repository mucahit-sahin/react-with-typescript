import api from "../../api";
import { Movies, MovieDispatch } from "../../types/movies";

export const getPopularMovies = (pageNumber:string|null) => async (dispatch: MovieDispatch) => {
    dispatch({ type: "GET_MOVIES_START" });
    try {
        const response = await api.get<Movies>(`movie/popular?api_key=ce2cd2a272535ed78b02d47570778045&language=en-US&page=${pageNumber===null?"1":pageNumber}`);
        dispatch({ type: "GET_MOVIES_SUCCESS" ,payload:response.data});
    } catch (error) {
        dispatch({ type: "GET_MOVIES_ERROR" });
    }
}
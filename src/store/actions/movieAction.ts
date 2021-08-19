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

export const searchMovie = (pageNumber:string|null,search:string) => async (dispatch: MovieDispatch) => {
    dispatch({ type: "GET_MOVIES_START" });
    try {
        search=search.replaceAll(" ","%20")
        const response = await api.get<Movies>(`search/movie?api_key=ce2cd2a272535ed78b02d47570778045&language=en-US&query=${search}&page=${pageNumber}&include_adult=false`);
        dispatch({ type: "GET_MOVIES_SUCCESS" ,payload:response.data});
    } catch (error) {
        dispatch({ type: "GET_MOVIES_ERROR" });
    }
}
import api from "../../api";
import { TvDispatch, TvSeries } from "../../types/tv";

export const getPopularTvSeries= (pageNumber:string|null) => async (dispatch: TvDispatch) => {
    dispatch({ type: "GET_TV_START" });
    try {
        const response = await api.get<TvSeries>(`tv/popular?api_key=ce2cd2a272535ed78b02d47570778045&language=en-US&page=${pageNumber?pageNumber:"1"}`);
        dispatch({ type: "GET_TV_SUCCESS" ,payload:response.data});
        console.log(response.data);
    } catch (error) {
        dispatch({ type: "GET_TV_ERROR" });
    }
}


export const searchTvSeries = (pageNumber:string|null,search:string) => async (dispatch: TvDispatch) => {
    dispatch({ type: "GET_TV_START" });
    try {
        search=search.replaceAll(" ","%20")
        const response = await api.get<TvSeries>(`search/tv?api_key=ce2cd2a272535ed78b02d47570778045&language=en-US&query=${search}&page=${pageNumber}&include_adult=false`);
        dispatch({ type: "GET_TV_SUCCESS" ,payload:response.data});
    } catch (error) {
        dispatch({ type: "GET_TV_ERROR" });
    }
}
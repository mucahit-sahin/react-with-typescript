import { TvAction, TvSeriesState } from "../../types/tv";

const defaultState: TvSeriesState = { data: {}, error:"",loading:false}


function tvReducer (state:TvSeriesState = defaultState,action:TvAction) {
    switch (action.type) {
        case "GET_TV_START":
            return {...state,loading:true,error:""};
        case "GET_TV_SUCCESS":
            return {...state,data:action.payload,loading:false,error:""};
        case "GET_TV_ERROR":
            return { ...state, loading: false, error: "There is a error!" };
        default:
            return state;
    }
}
export default tvReducer;
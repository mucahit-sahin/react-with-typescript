import { MovieAction, MoviesState } from "../../types/movies";
const defaultState: MoviesState = {data:{},error:"",loading:false}


function movieReducer (state:MoviesState = defaultState,action:MovieAction) {
    switch (action.type) {
        case "GET_MOVIES_START":
            return {...state,loading:true,error:""};
        case "GET_MOVIES_SUCCESS":
            return {data:action.payload,loading:false,error:""};;
        case "GET_MOVIES_ERROR":
            return {...state,loading:false,error:"There is a error!"};;
        default:
            return state;
    }
}
export default movieReducer;
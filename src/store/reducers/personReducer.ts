import { PersonAction, PersonsState } from "../../types/persons";

const defaultState: PersonsState = {data:{},error:"",loading:false}

function personReducer (state:PersonsState = defaultState,action:PersonAction) {
    switch (action.type) {
        case "GET_PERSONS_START":
            return {...state,loading:true,error:""};
        case "GET_PERSONS_SUCCESS":
            return {data:action.payload,loading:false,error:""};
        case "GET_PERSONS_ERROR":
            return { ...state, loading: false, error: "There is a error!" };
        case "GET_PERSON_START":
            return {...state,loading:true,error:""};
        case "GET_PERSON_SUCCESS":
            return {...state,personDetails:action.payload,loading:false,error:""};;
        case "GET_PERSON_ERROR":
            return {...state,loading:false,error:"There is a error!"};;
        default:
            return state;
    }
}
export default personReducer;
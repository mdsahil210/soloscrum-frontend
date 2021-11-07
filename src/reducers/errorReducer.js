import { GET_ERRORS } from "../actions/types";

const initialState = {};

//here in action we have the (payload + type of action)
export default function errorReducer(state=initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        
        default:
            return state;
    }
}
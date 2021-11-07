import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
    user: {},
    validToken: false
};

const isPayload = (payload) => {
    if(payload) return true;
    else return false;
}

export default function securityReducer(state=initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload,
                validToken: isPayload(action.payload)
            };
        default:
            return state;
    }
}    
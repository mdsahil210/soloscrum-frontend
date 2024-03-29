import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import backlogReducer from "./backlogReducer";
import securityReducer from "./securityReducer";

const rootReducer = combineReducers ({
    errors: errorReducer,
    projects: projectReducer,
    backlog: backlogReducer,
    security: securityReducer
})

export default rootReducer;
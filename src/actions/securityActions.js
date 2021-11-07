import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwtDecode from "jwt-decode";

export const createNewUser = (newUser, history) => async dispatch => {
    try {
        await axios.post("/api/users/register", newUser);
        history.push("/login");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch(error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const login = (loginRequest) => async dispatch =>{
    try {
        const res = await axios.post("/api/users/login", loginRequest);
        const {token} = res.data;
        localStorage.setItem("jwtToken", token);
        setJWTToken(token); // setting our token to header
        const decoded = jwtDecode(token);
        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded
        });
        
    } catch(error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    });
}
import {REST_API} from "../constants";

export const SIGNUP_USER = "SIGNUP_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";


export const signUp = (user) => ({
    type: REST_API,
    method: SIGNUP_USER,
    payload: {
        user
    }

});

export const login = (username, password) => ({
    type: REST_API,
    method: LOGIN_USER,
    payload: {
        username,
        password
    }

});

export const currentUser = (username) => ({
    type: LOGIN_USER,
    payload: {
        username
    }
});

export const logout = () => ({
    type: REST_API,
    method: LOGOUT_USER
});

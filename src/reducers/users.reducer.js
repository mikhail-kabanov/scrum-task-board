import {SIGNUP_USER, LOGIN_USER} from "../actions/users.actions";


const reducer = (state = [], action) => {
    switch (action.type) {
        case SIGNUP_USER:
            return {
                ...state
            };
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.username
            };

        default:
            return state;
    }
};

export default reducer;

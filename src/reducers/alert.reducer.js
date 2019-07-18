import {ERROR_LOGIN} from "../actions/alert.action";

const reducer = (state={}, action) => {
    switch (action.type) {
        case ERROR_LOGIN:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};

export default reducer;

import {FETCH_CARD} from "../actions/cardTask.action";


const reducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CARD:
            return {
                ...state,
                task: action.payload
            };

        default:
            return state;
    }
};

export default reducer;

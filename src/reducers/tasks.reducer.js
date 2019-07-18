import {ADD_TASK, DELETE_TASK, FETCH_TASKS} from "../actions/tasks.actions";
import {CHANGE_STATUS, DELETE_ALL, EDIT_TASK, SORT} from "../actions";


const reducer = (state = [], action) => {
    let sliced;
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                action.payload
            ];

        case FETCH_TASKS:
            sliced = state.slice();
            sliced.length = 0;
            sliced = action.payload;
            return sliced;

        case DELETE_ALL:
            sliced = state.slice();
            sliced.length = 0;
            return sliced;

        case DELETE_TASK:
            const index = state.findIndex(task => task.id === action.payload.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case EDIT_TASK:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {...task, ...action.payload};
                }
                return task;
            });

        case CHANGE_STATUS:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {...task, ...action.payload};
                }
                return task;
            });

        case SORT:
            sliced = state.slice();
            sliced.length = 0;
            sliced = action.payload;
            return sliced;

        default:
            return state;
    }
};

export default reducer;

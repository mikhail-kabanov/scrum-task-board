import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import user from "./users.reducer";
import tasks from "./tasks.reducer";
import cardTask from "./cardTask.reducer";
import alert from "./alert.reducer";


const rootReducer = combineReducers({
    user,
    tasks,
    cardTask,
    alert,
    routerReducer
});

export default rootReducer;

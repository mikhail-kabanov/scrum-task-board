import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import rootReducers from "../reducers/index";
import { restAPI } from "../middleware/middleware";

export const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);
const finalCreateStore = applyMiddleware( restAPI, reduxRouterMiddleware )( createStore );
const store = finalCreateStore( rootReducers );

export default store;

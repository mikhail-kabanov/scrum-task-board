import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import {Route} from "react-router";
import {ConnectedRouter} from "react-router-redux";
import {Provider} from "react-redux";
import store, {history} from "./store/index.js";

import App from "./App";
import "./styles/main.css";


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route path="/" component={App}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root"));

registerServiceWorker();

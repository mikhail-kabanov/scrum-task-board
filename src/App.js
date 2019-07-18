import React, {Component} from "react";
import {Route, Switch} from "react-router";

import users from "./users";

import TaskBoard from "./components/TaskBoard";
import ScrumBoard from "./components/ScrumBoard";
import Home from "./components/Home";
import {PrivateRoute} from "./components/PrivateRoute";
import HeaderContainer from "./containers/HeaderContainer";


class App extends Component {

    content() {
        return [
            <HeaderContainer key={"Header"}/>,
            <Switch key={"switch"}>
                <PrivateRoute path='/scrum' component={ScrumBoard}/>
                <PrivateRoute path='/board' component={TaskBoard}/>
                <PrivateRoute exact path='/' component={TaskBoard}/>
                <Route exact render={() => <Home/>}/>
            </Switch>
        ];
    }

    componentDidMount() {
        if (!(localStorage.getItem("users"))) {
            localStorage.setItem("users", JSON.stringify(users));
        }
    }


    render() {
        return (
            <div className="app">
                {this.content()}
            </div>
        );
    }
}

export default App;

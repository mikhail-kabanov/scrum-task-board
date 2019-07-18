import React, {Component} from "react";
import {Route, Switch} from "react-router";

import TaskCreatorContainer from "../containers/TaskCreatorContainer";
import ScrumContainer from "../containers/ScrumContainer";
import CardTaskContainer from "../containers/CardTaskContainer";


class ScrumBoard extends Component {

    render() {
        return [
            <main key={"board__main"} className={"content"}>
                <div className="scrumBoard">
                    <div key={"scrumBoard__taskCreator"} className="taskBoard__taskCreator">
                        <TaskCreatorContainer/>
                    </div>
                    <div key={"scrumBoard__scrum"} className="scrumBoard__scrum">
                        <Switch>
                            <Route path="/scrum/:id" component={CardTaskContainer}/>
                            <Route path="/scrum/" exact render={() => <ScrumContainer/>}/>
                        </Switch>
                    </div>
                </div>
            </main>
        ];
    }
}

export default ScrumBoard;

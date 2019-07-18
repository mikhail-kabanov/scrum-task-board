import React, {Component} from "react";
import {Route, Switch} from "react-router";

import TaskCreatorContainer from "../containers/TaskCreatorContainer";
import TasksListContainer from "../containers/TasksListContainer";
import CardTaskContainer from "../containers/CardTaskContainer";


class TaskBoard extends Component {

    render() {
        return [
            <main key={"todo__main"} className={"content"}>
                <div className="taskBoard">
                    <div key={"taskBoard__taskCreator"} className="taskBoard__taskCreator">
                        <TaskCreatorContainer/>
                    </div>
                    <div key={"taskBoard__tasks"} className="taskBoard__tasks">
                        <Switch>
                            <Route path="/board/:id" component={CardTaskContainer}/>
                            <Route path="/board/" exact render={() => <TasksListContainer/>}/>
                        </Switch>
                    </div>
                </div>
            </main>
        ];
    }
}

export default TaskBoard;

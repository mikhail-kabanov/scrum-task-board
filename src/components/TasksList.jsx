import React, {Component} from "react";
import PropTypes from "prop-types";

import Task from "./Task";


class TasksList extends Component {
    static propTypes = {
        tasks: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            content: PropTypes.string,
            status: PropTypes.string,
        })),
        onFetchTasks: PropTypes.func.isRequired,
        onDeleteTask: PropTypes.func.isRequired,
        onChooseTask: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            status: "",
            sortMethod: ""
        };
    }

    componentDidMount() {
        this.fetchTasks();
        setInterval(()=>{
            this.fetchTasks();
        }, 300000);
    }

    fetchTasks = () => {
        this.props.onFetchTasks();
    };

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        }, () => {
            if (name === "sortMethod") {
                this.sortTasks(value);
            }
        });
    };

    sortTasks = (method) => {
        let newTasks = [];
        this.props.tasks.map(task => newTasks.push(task));
        this.props.onSortTasks(newTasks, method);
    };

    render() {
        return [
            <div key={"taskList__sort-filter"} className="taskList__sort-filter">
                <div className="taskList__status">
                    <label htmlFor="sortMethod" className="taskList__sort-label">Sort by: </label>
                    <select name="sortMethod" value={this.state.sortMethod} onChange={this.handleChange}>
                        <option></option>
                        <option>asc</option>
                        <option>desc</option>
                    </select>
                    <label htmlFor="status" className="taskList__status-label">Filter by status: </label>
                    <select name="status" value={this.state.status} onChange={this.handleChange}>
                        <option></option>
                        <option>plan</option>
                        <option>in progress</option>
                        <option>done</option>
                    </select>
                </div>
            </div>,
            <div key={"tasks"} id={"tasks"}>
                {
                    (this.state.status)
                        ?
                        this.props.tasks
                            .filter(task => this.state.status === task.status)
                            .map(task =>
                                <Task
                                    key={task.id}
                                    id={task.id}
                                    content={task.content}
                                    status={task.status}
                                    onDeleteTask={this.props.onDeleteTask}
                                    onChooseTask={this.props.onChooseTask}
                                    classTask={"task"}
                                    scrum={false}
                                />)
                        :
                        this.props.tasks.map(task =>
                            <Task
                                key={task.id}
                                id={task.id}
                                content={task.content}
                                status={task.status}
                                onDeleteTask={this.props.onDeleteTask}
                                onChooseTask={this.props.onChooseTask}
                                classTask={"task"}
                                scrum={false}
                            />)
                }
            </div>
        ];
    }
}

export default TasksList;

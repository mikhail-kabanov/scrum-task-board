import React, { Component } from "react";
import PropTypes from "prop-types";


class CardTask extends Component {
    static propTypes = {
        cardTask: PropTypes.shape({
            task: PropTypes.shape({
                id: PropTypes.string,
                content: PropTypes.string,
                status: PropTypes.string,
                priority: PropTypes.string,
                creationDate: PropTypes.string
            })
        }),
        onFetchCardTask: PropTypes.func.isRequired,
        onEditTask: PropTypes.func.isRequired,
        onDeleteTask: PropTypes.func.isRequired,
        onCloseCardTask: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            content: "",
            status: "",
            creationDate: "",
            plannedTime: "",
            spentTime: "",
            statusOption1: "",
            statusOption2: "",
            priority: "",
            priorityOption1: "",
            priorityOption2: ""
        };
    }

    componentDidMount() {
        this.props.onFetchCardTask(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.cardTask !== nextProps.cardTask) {
            this.setState(
                {
                    id: nextProps.cardTask.task.id,
                    content: nextProps.cardTask.task.content,
                    status: nextProps.cardTask.task.status,
                    priority: nextProps.cardTask.task.priority,
                    creationDate: nextProps.cardTask.task.creationDate,
                    plannedTime: nextProps.cardTask.task.plannedTime,
                    spentTime: nextProps.cardTask.task.spentTime
                },
                () => {
                    this.setStatus(this.state.status);
                    this.setPriority(this.state.priority);
                }
            );
        }
    }

    setStatus = status1 => {
        const allStatus = ["plan", "in progress", "done"];
        let restStatus = allStatus.filter(status => status !== status1);
        this.setState({
            statusOption1: restStatus[0],
            statusOption2: restStatus[1]
        });
    };

    setPriority = priority1 => {
        const allPriority = ["low", "medium", "high"];
        let restPriority = allPriority.filter(
            priority => priority !== priority1
        );
        this.setState({
            priorityOption1: restPriority[0],
            priorityOption2: restPriority[1]
        });
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleChangeInput = event => {
        const reg = /^[0-9\b]+$/;
        const { name, value } = event.target;
        if (value === "" || reg.test(value)) {
            this.setState({
                [name]: value
            });
        }
    };

    handleSubmit = event => {
        event.preventDefault();

        const {
            id,
            content,
            status,
            priority,
            plannedTime,
            spentTime
        } = this.state;

        this.props.onEditTask(
            id,
            content,
            status,
            priority,
            plannedTime,
            spentTime
        );
    };

    handleDelete = () => {
        this.props.onDeleteTask(this.state.id);
    };

    handleClose = () => {
        this.props.onCloseCardTask();
    };

    render() {
        return (
            <div key={"card__task"} className="cardTask">
                {this.state.id ? (
                    <div className="cardTask__firstColumn">
                        <form action="" method="post">
                            <p>Creation date: {this.state.creationDate}</p>
                            <div className="cardTask__status-priority">
                                <label htmlFor="status">Status: </label>
                                <select
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.handleChange}
                                >
                                    <option>{this.state.status}</option>
                                    <option>{this.state.statusOption1}</option>
                                    <option>{this.state.statusOption2}</option>
                                </select>
                                <label
                                    htmlFor="priority"
                                    className="cardTask__priority"
                                >
                                    Priority:{" "}
                                </label>
                                <select
                                    name="priority"
                                    value={this.state.priority}
                                    onChange={this.handleChange}
                                >
                                    <option>{this.state.priority}</option>
                                    <option>
                                        {this.state.priorityOption1}
                                    </option>
                                    <option>
                                        {this.state.priorityOption2}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <div className="taskCreator__plannedTime">
                                    <label htmlFor="plannedTime">
                                        Planned Time:{" "}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="hours"
                                        required
                                        name="plannedTime"
                                        className="taskCreator__input"
                                        value={this.state.plannedTime}
                                        onChange={this.handleChangeInput}
                                    />
                                </div>

                                <div className="taskCreator__spentTime">
                                    <label htmlFor="spentTime">
                                        Spent Time:{" "}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="hours"
                                        required
                                        name="spentTime"
                                        className="taskCreator__input"
                                        value={this.state.spentTime}
                                        onChange={this.handleChangeInput}
                                    />
                                </div>
                            </div>
                            <textarea
                                className="cardTask__textArea"
                                name="content"
                                value={this.state.content}
                                onChange={this.handleChange}
                            />
                        </form>
                        <div className="cardTask__Btns">
                            <button
                                key={"cardTask__editBtn"}
                                className={"cardTask__editBtn"}
                                onClick={this.handleSubmit}
                            >
                                <i
                                    className="fa fa-floppy-o"
                                    aria-hidden="true"
                                />
                                <span> Save</span>
                            </button>
                            <button
                                key={"cardTask__deleteBtn"}
                                className={"cardTask__deleteBtn"}
                                onClick={this.handleDelete}
                            >
                                <i className="fa fa-trash" aria-hidden="true" />
                                <span> Delete</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
                <div>
                    <i
                        className="fa fa-times"
                        aria-hidden="true"
                        onClick={this.handleClose}
                    />
                </div>
            </div>
        );
    }
}

export default CardTask;

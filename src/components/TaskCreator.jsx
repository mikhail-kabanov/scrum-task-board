import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";


class TaskCreator extends Component {
    static propTypes = {
        tasks: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                content: PropTypes.string
            })
        ),
        onAddTask: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            text: "",
            status: "plan",
            priority: "low",
            plannedTime: "",
            spentTime: ""
        };
    }

    getUniqueId = () => {
        return (
            "_" +
            Math.random()
                .toString(36)
                .substr(2, 9)
        );
    };

    handleChangeInput = event => {
        const re = /^[0-9\b]+$/;
        const { name, value } = event.target;
        if (value === "" || re.test(value)) {
            this.setState({
                [name]: value
            });
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const id = this.getUniqueId();
        const content = this.state.text;
        const status = this.state.status;
        const priority = this.state.priority;
        const creationDate = moment().format("DD.MM.YYYY H:mm:ss");
        const plannedTime = this.state.plannedTime;
        const spentTime = this.state.spentTime;
        this.props.onAddTask(
            id,
            content,
            status,
            priority,
            creationDate,
            plannedTime,
            spentTime
        );
        this.setState({
            text: "",
            plannedTime: "",
            spentTime: ""
        });
    };

    render() {
        const { text } = this.state;
        return (
            <form
                key={"taskCreator__form"}
                className="taskCreator__form"
                action="#"
                id="taskCreator__form"
                name="taskCreator__form"
                method="post"
            >
                <div className="taskCreator__status">
                    <label
                        htmlFor="status"
                        className="taskCreator__status-label"
                    >
                        Status:{" "}
                    </label>
                    <select
                        name="status"
                        value={this.state.status}
                        onChange={this.handleChange}
                    >
                        <option>plan</option>
                        <option>in progress</option>
                        <option>done</option>
                    </select>
                </div>

                <div className="taskCreator__priority">
                    <label
                        htmlFor="priority"
                        className="taskCreator__priority-label"
                    >
                        Priority:{" "}
                    </label>
                    <select
                        name="priority"
                        value={this.state.priority}
                        onChange={this.handleChange}
                    >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                    </select>
                </div>

                <div className="taskCreator__plannedTime">
                    <label htmlFor="plannedTime">Planned Time: </label>
                    <input
                        placeholder="hours"
                        required
                        name="plannedTime"
                        className="taskCreator__input"
                        value={this.state.plannedTime}
                        type="text"
                        onChange={this.handleChangeInput}
                    />
                </div>

                <div className="taskCreator__spentTime">
                    <label htmlFor="spentTime">Spent Time: </label>
                    <input
                        placeholder="hours"
                        required
                        name="spentTime"
                        className="taskCreator__input"
                        value={this.state.spentTime}
                        type="text"
                        onChange={this.handleChangeInput}
                    />
                </div>

                <div className="taskCreator__textArea-Btn">
                    <textarea
                        className="taskCreator__textArea"
                        name="text"
                        placeholder="Write your task here..."
                        value={text}
                        onChange={this.handleChange}
                    />

                    <button
                        key={"taskCreator__button"}
                        className={"taskCreator__button"}
                        onClick={this.handleSubmit}
                    >
                        <i className="fa fa-plus" aria-hidden="true" />
                    </button>
                </div>
            </form>
        );
    }
}

export default TaskCreator;

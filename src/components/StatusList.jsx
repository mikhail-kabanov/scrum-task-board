import React, {Component} from "react";
import PropTypes from "prop-types";
import Task from "./Task";


class StatusList extends Component {
    static propTypes = {
        tasks: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            content: PropTypes.string,
            status: PropTypes.string,
        })),
        onDeleteTask: PropTypes.func.isRequired,
        onChooseTask: PropTypes.func.isRequired,
        onChangeStatusTask: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            fetching: true,
        };
    }

    allowDrop = (event) => {
        event.preventDefault();
    };

    onDropHandle = (event) => {
        const id = event.dataTransfer.getData("text/plain");
        this.props.onChangeStatusTask(id, this.props.statusList);
    };

    render() {
        let classNameBlock = `scrum__column ${this.props.classNameBlock}`;
        let classNameHeader = `scrum__header ${this.props.classNameHeader}`;
        return [
            <div key={classNameBlock} className={classNameBlock} onDragOver={this.allowDrop} onDrop={this.onDropHandle}>
                <div key={classNameHeader} className={classNameHeader}><span>{this.props.title}</span></div>
                <div key={this.props.title}>
                    {this.props.tasks
                        .filter(task => task.status === this.props.statusList)
                        .map(task =>
                            <Task
                                key={task.id}
                                id={task.id}
                                content={task.content}
                                status={task.status}
                                onDeleteTask={this.props.onDeleteTask}
                                onChooseTask={this.props.onChooseTask}
                                classTask={"scrum_task"}
                                scrum={true}
                            />
                        )
                    }
                </div>
            </div>
        ];
    }
}

export default StatusList;

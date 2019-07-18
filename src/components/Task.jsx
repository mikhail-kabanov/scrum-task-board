import React, {Component} from "react";
import PropTypes from "prop-types";


class Task extends Component {
    static propTypes = {
        id: PropTypes.string,
        content: PropTypes.string,
        status: PropTypes.string,
        classTask: PropTypes.string,
        scrum: PropTypes.bool,
        onDeleteTask: PropTypes.func.isRequired,
        onChooseTask: PropTypes.func.isRequired,
    };


    handleDelete = () => {
        this.props.onDeleteTask(this.props.id);
    };

    handleChoose = () => {
        const id = this.props.id;
        this.props.onChooseTask(id);
    };

    onStartDrag = (event, value) => {
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.setData("text/plain", value);
    };

    render() {
        return (
            <div className={this.props.classTask} draggable={true}
                 onDragStart={(event) => this.onStartDrag(event, this.props.id)}>
                <div className="task__firstColumn" onClick={this.handleChoose}>
                    {
                        (!this.props.scrum)
                            ?
                            <div key={"task_status"} className="task__status">
                                status: {this.props.status}
                            </div>
                            :
                            <div></div>
                    }
                    <div key={"task_content"} className="task__content">
                        {this.props.content}
                    </div>

                </div>
                <div key={"task_delete"} className="task__deleteBtn" onClick={this.handleDelete}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </div>

            </div>
        );
    }
}

export default Task;

import React, {Component} from "react";
import PropTypes from "prop-types";
import StatusList from "./StatusList";


class Scrum extends Component {
    static propTypes = {
        tasks: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            content: PropTypes.string,
            status: PropTypes.string,
        })),
        onFetchTasks: PropTypes.func.isRequired,
        onDeleteTask: PropTypes.func.isRequired,
        onChooseTask: PropTypes.func.isRequired,
        onChangeStatusTask: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            fetching: true,
            statusList: [
                {
                    id: 1,
                    status: "plan",
                    title: "Plan",
                    classNameBlock: "scrum__planStatus",
                    classNameHeader: "scrum__headerPlan"
                },
                {
                    id: 2,
                    status: "in progress",
                    title: "In Progress",
                    classNameBlock: "scrum__progressStatus",
                    classNameHeader: "scrum__headerProgress"
                },
                {
                    id: 3,
                    status: "done",
                    title: "Done",
                    classNameBlock: "scrum__doneStatus",
                    classNameHeader: "scrum__headerDone"
                },
            ]
        };
    }

    componentDidMount() {
        if (!this.props.tasks.length) {
            this.fetchTasks();
        }
    }

    fetchTasks = () => {
        this.props.onFetchTasks();
        this.setState({
            fetching: false
        });
    };

    render() {
        const {statusList} = this.state;
        return (
            <div className="scrumBoard__StatusList">
                {
                    statusList.map(item =>
                        <StatusList
                            key={item.status}
                            idList={item.id}
                            title={item.title}
                            statusList={item.status}
                            classNameBlock={item.classNameBlock}
                            classNameHeader={item.classNameHeader}
                            tasks={this.props.tasks}
                            onFetchTasks={this.props.onFetchTasks}
                            onDeleteTask={this.props.onDeleteTask}
                            onChooseTask={this.props.onChooseTask}
                            onChangeStatusTask={this.props.onChangeStatusTask}
                        />
                    )
                }
            </div>
        );
    }
}

export default Scrum;

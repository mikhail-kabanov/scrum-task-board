import {connect} from "react-redux";

import TaskCreator from "../components/TaskCreator";
import {addTaskToDB, addTask} from "../actions/tasks.actions";


const mapStateToProps = (state) => ({
    tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
    onAddTask(id, content, status, priority, creationDate, plannedTime, spentTime) {
        dispatch(addTaskToDB(id, content, status, priority, creationDate, plannedTime, spentTime));
        dispatch(addTask(id, content, status, priority, creationDate, plannedTime, spentTime));
    }
});

const TaskCreatorContainer = connect(mapStateToProps, mapDispatchToProps)(TaskCreator);

export default TaskCreatorContainer;

import {connect} from "react-redux";
import {push} from "react-router-redux";

import TasksList from "../components/TasksList";
import {deleteTask, deleteTaskFromDB, fetchTasks, fetchTasksFromDB, sortTasks} from "../actions/tasks.actions";


const mapStateToProps = (state) => ({
    tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
    onFetchTasks() {
        let fetchPromise = dispatch(fetchTasksFromDB());
        fetchPromise.then(result => {
            dispatch(fetchTasks(result));
        });
    },
    onDeleteTask(id) {
        dispatch(deleteTaskFromDB(id));
        dispatch(deleteTask(id));
    },
    onChooseTask(id) {
        dispatch(push(`/board/${id}`));
    },
    onSortTasks(tasks, method) {
        dispatch(sortTasks(tasks, method));
    },
});

const TasksListContainer = connect(mapStateToProps, mapDispatchToProps)(TasksList);

export default TasksListContainer;

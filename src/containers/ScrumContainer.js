import {connect} from "react-redux";
import {push} from "react-router-redux";

import Scrum from "../components/Scrum";
import {
    deleteTask,
    deleteTaskFromDB,
    fetchTasks,
    fetchTasksFromDB,
    changeStatusTask,
    changeStatusTaskDB
} from "../actions/tasks.actions";


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
    onChangeStatusTask(id, status) {
        dispatch(changeStatusTaskDB(id, status));
        dispatch(changeStatusTask(id, status));
    }
});

const ScrumContainer = connect(mapStateToProps, mapDispatchToProps)(Scrum);

export default ScrumContainer;

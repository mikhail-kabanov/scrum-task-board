import {connect} from "react-redux";

import CardTask from "../components/CardTask";
import {deleteTask, deleteTaskFromDB, editTask, editTaskDB} from "../actions/tasks.actions";
import {fetchCardTaskFromDB, fetchCardTask} from "../actions/cardTask.action";


const mapStateToProps = (state) => ({
    cardTask: state.cardTask
});

const mapDispatchToProps = (dispatch) => ({
    onFetchCardTask(id) {
        let fetchPromise = dispatch(fetchCardTaskFromDB(id));
        fetchPromise.then(result => {
            result.map(task => {
                return dispatch(fetchCardTask(task));
            });
        });
    },
    onEditTask(id, content, status, priority, plannedTime, spentTime) {
        dispatch(editTask(id, content, status, priority, plannedTime, spentTime));
        dispatch(editTaskDB(id, content, status, priority, plannedTime, spentTime));
        window.history.back();
    },
    onDeleteTask(id) {
        window.history.back();
        dispatch(deleteTaskFromDB(id));
        dispatch(deleteTask(id));
    },
    onCloseCardTask() {
        window.history.back();
    }
});


const CardTaskContainer = connect(mapStateToProps, mapDispatchToProps)(CardTask);

export default CardTaskContainer;

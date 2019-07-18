import {REST_API} from "../constants";

export const ADD_TASK = "ADD_TASK";
export const FETCH_TASKS = "FETCH_TASKS";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const DELETE_ALL = "DELETE_ALL";
export const SORT = "SORT";


export const addTaskToDB = (id, content, status, priority, creationDate, plannedTime, spentTime) => ({
    type: REST_API,
    method: ADD_TASK,
    payload: {
        id,
        content,
        status,
        priority,
        creationDate,
        plannedTime,
        spentTime
    }
});

export const addTask = (id, content, status, priority, creationDate, plannedTime, spentTime) => ({
    type: ADD_TASK,
    payload: {
        id,
        content,
        status,
        priority,
        creationDate,
        plannedTime,
        spentTime
    }
});

export const fetchTasksFromDB = () => ({
    type: REST_API,
    method: FETCH_TASKS,
});

export const fetchTasks = (tasks) => ({
    type: FETCH_TASKS,
    payload: tasks

});

export const deleteTaskFromDB = (id) => ({
    type: REST_API,
    method: DELETE_TASK,
    payload: {
        id
    }
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {
        id
    }
});

export const deleteAllTask = () => ({
    type: DELETE_ALL,
});

export const editTask = (id, content, status, priority, plannedTime, spentTime) => ({
    type: EDIT_TASK,
    payload: {
        id,
        content,
        status,
        priority,
        plannedTime,
        spentTime
    }
});

export const editTaskDB = (id, content, status, priority, plannedTime, spentTime) => ({
    type: REST_API,
    method: EDIT_TASK,
    payload: {
        id,
        content,
        status,
        priority,
        plannedTime,
        spentTime
    }
});

export const changeStatusTask = (id, status) => ({
    type: CHANGE_STATUS,
    payload: {
        id,
        status,
    }
});

export const changeStatusTaskDB = (id, status) => ({
    type: REST_API,
    method: CHANGE_STATUS,
    payload: {
        id,
        status,
    }
});

const sortAlphabetically = (tasks, method) => {
    switch (method) {
        case "asc":
            return tasks.sort((task1, task2) => {
                return task1.content.localeCompare(task2.content);
            });
        case "desc":
            return tasks.sort((task1, task2) => {
                return task2.content.localeCompare(task1.content);
            });

        default:
            return tasks;
    }
};

export const sortTasks = (tasks, method) => ({
    type: SORT,
    payload: sortAlphabetically(tasks, method)
});
import {REST_API, GET, POST} from "../constants/RestApi";
import {
    signUp,
    login,
    addTask,
    editTask,
    fetchTasks,
    deleteTask,
    fetchCardTask,
    changeStatusTask
} from "../fakeBackend";

const methods = {
    SIGNUP_USER: (payload) => {
        const requestOptions = {
            method: POST,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload.user)
        };

        return signUp(requestOptions).then(res => {
            return res;
        });
    },

    LOGIN_USER: (payload) => {
        const requestOptions = {
            method: POST,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        };

        return login(requestOptions).then(res => {
            return res;
        });
    },

    ADD_TASK: (payload) => {
        const requestOptions = {
            method: POST,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        };

        return addTask(requestOptions).then(res => {
            return res;
        });
    },

    FETCH_TASKS: (payload) => {
        const requestOptions = {
            method: GET,
        };

        return fetchTasks(requestOptions).then(res => {
            return res;
        });
    },

    DELETE_TASK: (payload) => {
        const requestOptions = {
            method: POST,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        };

        return deleteTask(requestOptions).then(res => {
            return res;
        });
    },

    FETCH_CARD: (payload) => {
        const requestOptions = {
            method: POST,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        };

        return fetchCardTask(requestOptions).then(res => {
            return res;
        });
    },

    EDIT_TASK: (payload) => {
        const requestOptions = {
            method: POST,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        };

        return editTask(requestOptions).then(res => {
            return res;
        });
    },

    CHANGE_STATUS: (payload) => {
        const requestOptions = {
            method: POST,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        };

        return changeStatusTask(requestOptions).then(res => {
            return res;
        });
    },
};

export const restAPI = (store) => (next) => (action) => {
    if (action.type !== REST_API) {
        return next(action);
    }

    return methods[action.method] && methods[action.method](action.payload);
};

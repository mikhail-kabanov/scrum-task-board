export const signUp = (options) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let newUser = JSON.parse(options.body);
            let duplicateUser = users.filter(user => user.username === newUser.username).length;

            if (duplicateUser) {
                reject("Username is already taken");
                return;
            }

            newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            resolve("Registration successful");

        }, 500);
    });
};

export const login = (options) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let opts = JSON.parse(options.body);
            let filteredUser = users.filter(user =>
                opts.username === user.username && opts.password === user.password);

            if (filteredUser.length) {
                let user = filteredUser[0];
                let responseJson = {
                    id: user.id,
                    username: user.username,
                };
                resolve(responseJson);
            } else {
                reject(new Error("Username or password is incorrect"));
            }

        }, 500);
    });
};

export const addTask = (options) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let currentUser = JSON.parse(localStorage.getItem("user"));
            let task = JSON.parse(options.body);
            let idUser = currentUser.username;

            users.filter((user, id) => {
                return (currentUser.username === user.username) ? idUser = id : idUser;
            });

            if (users[idUser].tasks === undefined) {
                users[idUser].tasks = [];
                users[idUser].tasks.push(task);
            } else {
                users[idUser].tasks.push(task);
            }

            localStorage.setItem("users", JSON.stringify(users));

            resolve("ok");

        }, 500);
    });
};

export const fetchTasks = (options) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let currentUser = JSON.parse(localStorage.getItem("user"));

            let idUser = currentUser.id;
            users.filter((user, id) => {
                return (currentUser.username === user.username) ? idUser = id : idUser;
            });

            let tasks = [];
            if (users[idUser].tasks.length) {
                users[idUser].tasks.map(task => tasks.push(task));
            }

            resolve(tasks);

        }, 500);
    });
};

export const fetchCardTask = (options) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let currentUser = JSON.parse(localStorage.getItem("user"));
            let idTask = JSON.parse(options.body);
            let idUser = currentUser.id;

            users.filter((user, id) => {
                return (currentUser.username === user.username) ? idUser = id : idUser;
            });

            let index = "";
            users[idUser].tasks.filter((task, id) => {
                return (task.id === idTask.id) ? index = id : index;
            });

            let task = [];
            task.push(users[idUser].tasks[index]);

            resolve(task);

        }, 500);
    });
};

export const deleteTask = (options) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let currentUser = JSON.parse(localStorage.getItem("user"));
            let idDeleteTask = JSON.parse(options.body);
            let idUser = "";

            users.filter((user, id) => {
                return (currentUser.username === user.username) ? idUser = id : idUser;
            });

            let index = "";
            users[idUser].tasks.filter((task, id) => {
                return (task.id === idDeleteTask.id) ? index = id : index;
            });

            users[idUser].tasks.splice(index, 1);

            localStorage.setItem("users", JSON.stringify(users));

            resolve("ok");

        }, 500);
    });
};

export const editTask = (options) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let currentUser = JSON.parse(localStorage.getItem("user"));
            let editedTask = JSON.parse(options.body);
            let idUser = "";

            users.filter((user, id) => {
                return (currentUser.username === user.username) ? idUser = id : idUser;
            });

            let index = "";
            users[idUser].tasks.filter((task, id) => {
                return (task.id === editedTask.id) ? index = id : index;
            });

            users[idUser].tasks[index].content = editedTask.content;
            users[idUser].tasks[index].status = editedTask.status;
            users[idUser].tasks[index].priority = editedTask.priority;
            users[idUser].tasks[index].plannedTime = editedTask.plannedTime;
            users[idUser].tasks[index].spentTime = editedTask.spentTime;

            localStorage.setItem("users", JSON.stringify(users));

            resolve("ok");

        }, 500);
    });
};

export const changeStatusTask = (options) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let currentUser = JSON.parse(localStorage.getItem("user"));
            let editedTask = JSON.parse(options.body);
            let idUser = "";

            users.filter((user, id) => {
                return (currentUser.username === user.username) ? idUser = id : idUser;
            });

            let index = "";
            users[idUser].tasks.filter((task, id) => {
                return (task.id === editedTask.id) ? index = id : index;
            });

            users[idUser].tasks[index].status = editedTask.status;
            localStorage.setItem("users", JSON.stringify(users));

            resolve("ok");

        }, 500);
    });
};

export const ERROR_LOGIN = "ERROR_LOGIN";

export const errorLogin = (error) => ({
    type: ERROR_LOGIN,
    payload: error
});

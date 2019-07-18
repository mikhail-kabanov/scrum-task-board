import {connect} from "react-redux";
import {push} from "react-router-redux";

import Login from "../components/Login";
import {login, currentUser} from "../actions";
import {errorLogin} from "../actions/alert.action";


const mapStateToProps = (state) => ({
    alert: state.alert
});

const mapDispatchToProps = (dispatch) => ({
    onLogin(username, password) {
        let loginPromise = dispatch(login(username, password));
        loginPromise.then(
            result => {
                localStorage.setItem("user", JSON.stringify(result));
                dispatch(push("/board"));
            },
            error => {
                dispatch(errorLogin(error.message));
            });
        dispatch(currentUser(username));
    }
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;

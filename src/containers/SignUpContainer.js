import {connect} from "react-redux";
import {push} from "react-router-redux";

import SignUp from "../components/SignUp";
import {signUp} from "../actions";


const mapDispatchToProps = (dispatch) => ({
    onSignUp(user) {
        dispatch(signUp(user));
        dispatch(push("/login"));
    }
});

const SignUpContainer = connect(null, mapDispatchToProps)(SignUp);

export default SignUpContainer;

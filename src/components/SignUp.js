import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


export default class SignUp extends Component {
    static propTypes = {
        onSignUp: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: "",
                password: "",
                tasks: []
            },
            submitted: false,
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        const {user} = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        if (user.username && user.password) {
            this.props.onSignUp(user);
        }
    };


    render() {
        const {user} = this.state;
        return [
            <div key={"signup__container"} className="login__container">
                <div key={"signup__title"} className="login__title">
                    <h2>Create your personal account</h2>
                </div>
                <form key={"signup__form"} action="#" className="login__form" id="login__form" name="login"
                      method="post">

                    <input
                        key={"signup__user"}
                        className={"login__input"}
                        placeholder='Username'
                        required
                        id="login__username"
                        name={"username"}
                        value={user.username}
                        onChange={this.handleChange}
                    />
                    <input
                        key={"signup__password"}
                        className={"login__input"}
                        placeholder='Password'
                        required
                        id="login__password"
                        name={"password"}
                        type='password'
                        value={user.password}
                        onChange={this.handleChange}
                    />

                    <button key={"signup__button"} className={"login__button"} onClick={this.handleSubmit}>SignUp
                    </button>
                    <div className={"login__message"}>Already registered? <Link to='/login'>Login</Link></div>
                </form>
            </div>

        ];
    }
}

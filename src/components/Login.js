import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


export default class Login extends Component {
    static propTypes = {
        alert: PropTypes.shape({
            error: PropTypes.string,
        }),
        onLogin: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            error: ""
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.alert.error !== nextProps.alert.error) {
            this.setState({
                error: nextProps.alert.error
            });
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const {username, password} = this.state;
        if (username && password) {
            this.props.onLogin(username, password);
        }
    };

    render() {
        const {username, password} = this.state;
        return (
            <div className="login__container">
                <div key={0} className="login__title">
                    <h2>Log-in to your account</h2>
                </div>
                <form key={"login__form"} action="#" id="login__form" className="login__form" name="login"
                      method="post">
                    <input
                        key="login__username"
                        id="login__username"
                        name="username"
                        className="login__input"
                        placeholder="Username"
                        value={username}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        key="login__password"
                        id="login__password"
                        type="password"
                        name="password"
                        className="login__input"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />

                    <button key={"login__button"} type="submit" className={"login__button"} onClick={
                        this.handleSubmit
                    }>Login
                    </button>

                    {(this.state.error)
                        ?
                        <div className={"login__alert-error"}>
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> {this.state.error}
                        </div>
                        :
                        <div></div>
                    }

                    <div className={"login__message"}>Not registered? <Link to='/SignUp'>Sign Up</Link></div>


                </form>
            </div>
        );
    }
}

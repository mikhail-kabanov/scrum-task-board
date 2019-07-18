import React, {Component} from "react";
import PropTypes from "prop-types";


export default class Header extends Component {
    static propTypes = {
        tasks: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            content: PropTypes.string
        })),
        onLogout: PropTypes.func.isRequired,
        onGoScrumBoard: PropTypes.func.isRequired,
        onGoTaskBoard: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            classNameHeaderScrum: "header__toggle-off",
            classNameHeaderList: ""
        };
    }

    componentDidMount() {
        if (this.props.routerReducer.location.pathname === "/scrum") {
            this.setState({
                classNameHeaderScrum: "",
                classNameHeaderList: "header__toggle-off"
            });
        }
    }

    logout = () => {
        this.props.onLogout();
    };

    scrumTaskBoard = () => {
        this.setState({
            classNameHeaderScrum: "",
            classNameHeaderList: "header__toggle-off"
        });
        this.props.onGoScrumBoard();
    };

    listTaskBoard = () => {
        this.setState({
            classNameHeaderScrum: "header__toggle-off",
            classNameHeaderList: ""
        });
        this.props.onGoTaskBoard();
    };

    render() {
        let classNameToggleList = `header__toggle ${this.state.classNameHeaderList}`;
        let classNameToggleScrum = `header__toggle ${this.state.classNameHeaderScrum}`;
        const headerTitle = "Task board";
        return (
            (localStorage.getItem("user"))
                ?
                <header>
                    <div className="header__board">
                        <div className="header__toggleView">
                            <div className={classNameToggleList} onClick={this.listTaskBoard}>
                                <i className="fa fa-bars" aria-hidden="true"></i>
                                <span> List</span>
                            </div>
                            <div className={classNameToggleScrum} onClick={this.scrumTaskBoard}>
                                <i className="fa fa-columns" aria-hidden="true"></i>
                                <span> Scrum</span>
                            </div>
                        </div>

                        <p onClick={this.logout} className="header__logout">Logout</p>
                    </div>
                </header>
                :
                <header>
                    <div className="header__main">
                        {headerTitle}
                    </div>
                </header>
        );
    }
}

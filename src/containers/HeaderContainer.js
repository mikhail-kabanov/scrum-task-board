import {connect} from "react-redux";
import {push} from "react-router-redux";
import Header from "../components/Header";
import {deleteAllTask} from "../actions";


const mapStateToProps = (state) => ({
    tasks: state.tasks,
    routerReducer: state.routerReducer
});

const mapDispatchToProps = (dispatch) => ({
    onLogout() {
        localStorage.removeItem("user");
        dispatch(deleteAllTask());
        dispatch(push("/"));
    },
    onGoScrumBoard() {
        dispatch(push("/scrum"));
    },
    onGoTaskBoard() {
        dispatch(push("/board"));
    },
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;

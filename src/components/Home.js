import React, {Component} from "react";
import {Route, Switch} from "react-router";

import LoginContainer from "../containers/LoginContainer";
import SignUpContainer from "../containers/SignUpContainer";


export default class Home extends Component {

    footer(footerTitle) {
        return (
            <footer key={"footer"} className="footer">
                <div className="footer__copyright">
                    {footerTitle}
                </div>
            </footer>
        );
    }

    render() {
        let footerTitle = "2018";
        return [
            <main key={"home__content"} className={"content"}>
                <div key={"home__container"} className="login__container">
                    <Switch>
                        <Route path="/SignUp" component={SignUpContainer}/>
                        <Route path="/login" exact render={() => <LoginContainer/>}/>
                    </Switch>
                </div>
            </main>,
            this.footer(footerTitle)
        ];
    }
}

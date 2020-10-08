import React, { PureComponent } from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import FrontPage from "../FrontPage/FrontPage"
export default class Mainview extends PureComponent {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={FrontPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

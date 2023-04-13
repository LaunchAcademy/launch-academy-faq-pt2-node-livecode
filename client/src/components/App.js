import React from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import FAQList from "./FAQList"
import LauncherList from "./LauncherList"
import LauncherShow from "./LauncherShow"


const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={FAQList} />
                    <Route exact path="/launchers" component={LauncherList} />
                    <Route exact path="/launchers/:id" component={LauncherShow} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default hot(App)
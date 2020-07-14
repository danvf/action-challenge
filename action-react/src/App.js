import React from "react";
import Course from "./components/Course";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import User from "./components/User";
import ScrollUp from "./util/ScrollUp";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import "./style/App.scss";
import Empty from "./components/Empty";

function App() {
    return (
        <div className="app">
            <Router>
                <ScrollUp />
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/store" />
                    </Route>
                    <Route path="/user" component={Empty} />
                    <Route exact path="/store" component={Store} />
                    <Route path="/store/:id" component={Course} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

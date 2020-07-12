import React from "react";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import User from "./components/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import "./style/App.scss";

function App() {
    return (
        <div className="app">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/store" />
                    </Route>
                    <Route path="/user" component={User} />
                    <Route path="/store" component={Store} />
                    <Route path="/store/:id"
                </Switch>
            </Router>
        </div>
    );
}

export default App;

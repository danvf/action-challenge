import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
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
                <Search />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/store" />
                    </Route>
                    <Route path="/user" component={User} />
                    <Route path="/store" component={Store} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

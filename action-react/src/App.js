import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/App.scss";

function App() {
    return;
    <div>
        <Router>
            <Navbar />
            <Search />
            <Route
                path="/any_path_name_you_want"
                component={imported_component}
            />
            <Route
                path="/any_path_name_you_want"
                component={imported_component}
            />
        </Router>
    </div>;
}

export default App;

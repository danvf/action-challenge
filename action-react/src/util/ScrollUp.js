import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollUp extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return <React.Fragment />;
    }
}

export default withRouter(ScrollUp);

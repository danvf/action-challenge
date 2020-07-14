import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/Navbar.scss";

function Navbar() {
    const [activeTab, setActiveTab] = useState();
    const location = useLocation().pathname;

    useEffect(() => {
        if (location.startsWith("/user")) {
            setActiveTab(1);
        } else {
            setActiveTab(2);
        }
    }, [location]);

    return (
        <div className="navbar">
            <div className="tab-box">
                <Link to="/user" style={{ textDecoration: "none" }}>
                    <div
                        tabIndex="1"
                        onClick={() => setActiveTab(1)}
                        className={
                            "icon-btn " + (activeTab === 1 ? "active" : "")
                        }
                    >
                        <div className="icon-img">
                            {" "}
                            <i className="fas fa-user"></i>{" "}
                        </div>
                        <div className="title">Minhas Ações</div>
                    </div>
                </Link>
            </div>
            <div className="tab-box">
                <Link to="/store" style={{ textDecoration: "none" }}>
                    <div
                        tabIndex="2"
                        onClick={() => setActiveTab(2)}
                        className={
                            "icon-btn " + (activeTab === 2 ? "active" : "")
                        }
                    >
                        <div className="icon-img">
                            {" "}
                            <i className="fas fa-store"></i>{" "}
                        </div>
                        <div className="title">Moodar Store</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;

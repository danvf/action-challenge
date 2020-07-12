import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.scss";

function Navbar() {
    const [activeTab, setActiveTab] = useState(2);

    return (
        <div className="navbar">
            <div className="tab-box">
                <Link to="/user" style={{ textDecoration: "none" }}>
                    <div
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

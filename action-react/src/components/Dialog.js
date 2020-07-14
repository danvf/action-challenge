import React from "react";
import { Link } from "react-router-dom";
import "../style/Dialog.scss";

function Dialog() {
    return (
        <div className="black-bg">
            <div className="dialog-box">
                <i className="fas fa-check ok"></i>
                <p className="dialog-text1">Ação solicitada!</p>
                <p className="dialog-text2">
                    (Você pode acompanhar suas solicitações no menu "Minhas
                    Ações")
                </p>
                <Link to="/store">
                    <button className="dialog-btn"> ok </button>
                </Link>
            </div>
        </div>
    );
}

export default Dialog;

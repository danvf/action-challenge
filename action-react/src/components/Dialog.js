import React from "react";
import { useDispatch } from "react-redux";
import { closeDialog } from "../actions";
import { Link } from "react-router-dom";
import "../style/Dialog.scss";

function Dialog() {
    const dispatch = useDispatch();
    const handleDialog = () => {
        dispatch(closeDialog());
    };

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
                    <button onClick={handleDialog} className="dialog-btn">
                        {" "}
                        ok{" "}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Dialog;

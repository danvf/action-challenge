import React from "react";
import Card from "./Card";
import "../style/Store.scss";

function Store() {
    return (
        <div className="store-box">
            <div className="store-grid">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Store;

import React from "react";
import "../style/Card.scss";

function Card() {
    return (
        <div className="card-box">
            <div className="img-wrap">
                <img
                    className="card-bg"
                    src="https://s3.amazonaws.com/kp-blog/wp-content/uploads/2019/04/24092608/o-que-e-lideranca-lideranca-moderna-1024x727.jpg"
                />
                <svg className="card-svg" viewBox="0 0 280 52">
                    <path
                        fill="#ffffff"
                        fill-opacity="1"
                        d="M 0 100 L 0 40 Q 100 0 180 40 Q 240 60 280 40 L 280 100 Z"
                    ></path>
                </svg>
            </div>
            <div className="details-box">
                <p className="card-title">
                    {" "}
                    Title of the Course, sometimes Large, just too much{" "}
                </p>
                <div className="card-footer">
                    <div className="category"> categoria </div>
                    <p className="info"> clique para saber mais </p>
                </div>
            </div>
        </div>
    );
}

export default Card;

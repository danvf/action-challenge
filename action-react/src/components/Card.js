import React from "react";
import { Link } from "react-router-dom";
import "../style/Card.scss";

function Card(props) {
    // props: id, title, image, category
    return (
        <div className="card-box">
            <Link style={{ textDecoration: "none" }} to={`/store/${props.id}`}>
                <div className="img-wrap">
                    <img
                        className="card-bg"
                        alt="Imagem representando tema da ação"
                        src={props.image}
                    />
                    <svg className="card-svg" viewBox="0 0 280 52">
                        <path
                            fill="#ffffff"
                            d="M 0 100 L 0 40 Q 100 0 180 40 Q 240 60 280 40 L 280 100 Z"
                        ></path>
                    </svg>
                </div>
                <div className="details-box">
                    <p className="card-title"> {props.title} </p>
                    <div className="card-footer">
                        <div className="category"> {props.category} </div>
                        <p className="info"> clique para saber mais </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;

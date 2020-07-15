import React, { useState, useRef } from "react";
import useOutsideClick from "../util/UseOutsideClick";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeCourse } from "../actions";
import "../style/Solicitation.scss";

function Solicitation(props) {
    // props: id, title, category, audience, duration, description
    const [seeMore, setSeeMore] = useState(false);
    const handleSeeMore = () => {
        setSeeMore(!seeMore);
    };

    const ref = useRef();
    useOutsideClick(ref, () => {
        setSeeMore(false);
    });

    const dispatch = useDispatch();
    const handleCancelSolicitation = () => {
        dispatch(removeCourse(props.id));
    };

    return (
        <div ref={ref} className="sol-box">
            <div className="sol-title"> {props.title} </div>
            <div className="sol-divider" />
            <div className="sol-spec">
                <div className="title"> Duração: </div>
                <div className="content"> {props.duration} </div>
            </div>
            <div className="sol-spec">
                <div className="title"> Audiência: </div>
                <div className="content"> {props.audience} pessoas</div>
            </div>
            <div className="sol-spec">
                <div className="title"> Categoria: </div>
                <div className="content"> {props.category} </div>
            </div>
            <div className="sol-spec details">
                <div className="title"> Descrição: </div>
                <div className={"desc-content " + (seeMore ? "expand" : "")}>
                    {props.description}
                </div>
            </div>

            <div className="img-wrap">
                {seeMore ? (
                    <div className="cancel-sol-box">
                        <Link to="/user">
                            <button
                                onClick={handleCancelSolicitation}
                                className="cancel-sol-btn"
                            >
                                Cancelar Solicitação
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="gradient" />
                )}

                <div className="see-more-box">
                    <i
                        onClick={handleSeeMore}
                        className={
                            seeMore
                                ? "fas fa-minus see-more-btn"
                                : "fas fa-plus see-more-btn"
                        }
                    ></i>
                    <div className="btn-label">
                        {seeMore ? "ver menos" : "ver mais"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solicitation;

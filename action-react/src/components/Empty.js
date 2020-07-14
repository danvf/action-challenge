import React from "react";
import "../style/Empty.scss";

function Empty(props) {
    const detailsA =
        "(Você pode procurar por ações disponíveis para solicitação na Moodar Store)";
    const detailsB = "(Não existem mais ações disponíveis para solicitação)";

    return (
        <div className="empty-box">
            <i className="far fa-frown"></i>
            <p className="empty-text"> Sem ações disponíveis </p>
            <p className="empty-details">
                {props.details === "a" ? detailsA : detailsB}
            </p>
        </div>
    );
}

export default Empty;

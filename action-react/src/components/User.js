import React from "react";
import { useSelector } from "react-redux";
import Empty from "./Empty";
import Solicitation from "./Solicitation";
import "../style/User.scss";

function User() {
    const courses = useSelector((state) => state.courses.client);
    const isEmpty = typeof courses === "undefined" || courses.length === 0;

    return (
        <div>
            <div className="user-banner">
                <p className="banner-title">Solicitações</p>
                <div className="banner-divider" />
            </div>
            <div className="user-box">
                {isEmpty ? (
                    <Empty details="a" />
                ) : (
                    courses.map((course) => (
                        <Solicitation
                            key={course.id}
                            id={course.id}
                            title={course.title}
                            category={course.category}
                            audience={course.audience}
                            duration={course.duration}
                            description={course.description}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default User;

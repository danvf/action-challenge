import React from "react";
import { addCourse, openDialog } from "../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/Course.scss";

function Course({ match }) {
    const courses = useSelector((state) => state.courses.moodar);
    const id = match.params.id;
    const dispatch = useDispatch();

    const handleAddSolicitation = () => {
        dispatch(addCourse(id));
        dispatch(openDialog());
    };

    const findCourse = (id, courses) => {
        let obj = courses.find((c) => String(c.id) === String(id));
        return obj;
    };

    const course = findCourse(id, courses);

    return (
        <div className="course-box">
            <div
                className="course-bg"
                style={{ backgroundImage: "url(" + course.photoURL + ")" }}
            >
                <div className="bg-filter" />
            </div>
            <div className="course-title"> {course.title} </div>
            <div className="course-divider" />
            <div className="course-numbers">
                <div className="info-box">
                    <i className="fas fa-clock"></i>
                    <p className="number"> {course.duration} </p>
                    <p className="description"> duração </p>
                </div>
                <div className="info-box alt-info">
                    <div className="category"> {course.category} </div>
                    <p className="description"> categoria </p>
                </div>
                <div className="info-box">
                    <i className="fas fa-users"></i>
                    <p className="number"> {course.audience} </p>
                    <p className="description"> audiência </p>
                </div>
            </div>
            <div className="course-description"> {course.description} </div>
            <div className="course-btns">
                <Link to={"/store"}>
                    <button
                        onClick={handleAddSolicitation}
                        className="confirm-btn"
                    >
                        Solicitar Ação
                    </button>
                    <button className="cancel-btn"> Voltar </button>
                </Link>
            </div>
        </div>
    );
}

export default Course;

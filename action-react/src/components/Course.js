import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dialog from "./Dialog";
import "../style/Course.scss";

function Course({ match }) {
    const [openDialog, setOpenDialog] = useState(false);
    const handleSolicitation = () => {
        setOpenDialog(true);
    };
    const courses = useSelector((state) => state.moodarCourses);
    const id = match.params.id;
    const course = findCourse(id, courses);

    return (
        <div className="course-box">
            {openDialog && <Dialog />}
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
                <button onClick={handleSolicitation} className="confirm-btn">
                    Solicitar Ação
                </button>
                <Link to={"/store"}>
                    <button className="cancel-btn"> Voltar </button>
                </Link>
            </div>
        </div>
    );
}

function findCourse(id, courses) {
    let obj = courses.find((c) => String(c.id) === String(id));
    return obj;
}

export default Course;

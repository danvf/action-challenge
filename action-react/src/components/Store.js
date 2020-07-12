import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import Search from "./Search";
import "../style/Store.scss";

function Store() {
    const courses = useSelector((state) => state.moodarCourses);
    return (
        <div>
            <Search />
            <div className="store-box">
                <div className="store-grid">
                    {courses.map((course) => (
                        <Link
                            style={{ textDecoration: "none" }}
                            to={`/store/${course.id}`}
                        >
                            <Card
                                key={course.id}
                                id={course.id}
                                title={course.title}
                                image={course.photoURL}
                                category={course.category}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Store;

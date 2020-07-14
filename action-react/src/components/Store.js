import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import Empty from "./Empty";
import Search from "./Search";
import "../style/Store.scss";

function Store() {
    const [titleInput, setTitleInput] = useState("");
    const handleTitleInput = (event) => {
        setTitleInput(event.target.value);
    };

    const [categoryInput, setCategoryInput] = useState("Todas");
    const handleCategoryInput = (event) => {
        setCategoryInput(event.target.value);
    };

    const handleSearch = (event) => {
        let results = courses.filter((course) =>
            course.title.toLowerCase().includes(titleInput.toLowerCase())
        );

        if (categoryInput !== "Todas") {
            results = results.filter((course) =>
                course.category
                    .toLowerCase()
                    .includes(categoryInput.toLowerCase())
            );
        }

        setQueryResults(results);
    };

    const courses = useSelector((state) => state.moodarCourses);
    const [queryResults, setQueryResults] = useState(courses);
    const isEmpty =
        typeof queryResults === "undefined" || queryResults.length === 0;

    return (
        <div>
            <Search
                titleInput={titleInput}
                categoryInput={categoryInput}
                handleTitleInput={handleTitleInput}
                handleCategoryInput={handleCategoryInput}
                handleSearch={handleSearch}
            />
            <div className="store-banner">
                <p className="banner-title">Ações</p>
                <div className="banner-divider" />
            </div>

            <div className="store-box">
                <div className="store-grid">
                    {isEmpty ? (
                        <Empty details="b" />
                    ) : (
                        queryResults.map((course) => (
                            <Card
                                key={course.id}
                                id={course.id}
                                title={course.title}
                                image={course.photoURL}
                                category={course.category}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Store;

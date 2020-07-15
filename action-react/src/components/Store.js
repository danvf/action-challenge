import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import Empty from "./Empty";
import Search from "./Search";
import "../style/Store.scss";
import Dialog from "./Dialog";

function Store() {
    const courses = useSelector((state) => state.courses.moodar);

    useEffect(() => {}, [courses]);

    const [titleInput, setTitleInput] = useState("");
    const handleTitleInput = (event) => {
        setTitleInput(event.target.value);
    };

    const [categoryInput, setCategoryInput] = useState("Todas");
    const handleCategoryInput = (event) => {
        setCategoryInput(event.target.value);
    };

    const [queryResults, setQueryResults] = useState(courses);
    const isEmpty =
        typeof queryResults === "undefined" || queryResults.length === 0;

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

    const openDialog = useSelector((state) => state.dialog);

    return (
        <div>
            {openDialog && <Dialog />}
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
                {isEmpty ? (
                    <Empty details="b" />
                ) : (
                    <div className="store-grid">
                        {queryResults.map((course) => (
                            <Card
                                key={course.id}
                                id={course.id}
                                title={course.title}
                                image={course.photoURL}
                                category={course.category}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Store;

import React from "react";
import { useSelector } from "react-redux";
import "../style/Search.scss";

function Search() {
    const categories = useSelector((state) => state.categories);
    let categoryCount = 1;
    return (
        <div className="search">
            <div className="search-item">
                <div className="grad-border">
                    <input
                        className="title-input"
                        type="text"
                        placeholder="Buscar Ações..."
                        maxLength="50"
                    ></input>
                </div>
                <div className="label"> título </div>
            </div>
            <div className="search-item">
                <div className="grad-border">
                    <select className="category-input">
                        <option className="category-item" value="0">
                            {" "}
                            Todas{" "}
                        </option>
                        {categories.map((category) => (
                            <option
                                className="category-item"
                                value={categoryCount++}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="label"> categoria </div>
            </div>
            <div className="search-item">
                <i className="fas fa-search"></i>
                <div className="btn-label"> pesquisar </div>
            </div>
        </div>
    );
}

export default Search;

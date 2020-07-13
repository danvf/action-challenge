import React from "react";
import { useSelector } from "react-redux";
import "../style/Search.scss";

function Search({
    titleInput,
    categoryInput,
    handleTitleInput,
    handleCategoryInput,
    handleSearch,
}) {
    const categories = useSelector((state) => state.categories);

    return (
        <div className="search">
            <div className="search-item">
                <div
                    className={
                        "grad-border " + (titleInput != "" ? "active" : "")
                    }
                >
                    <input
                        className="title-input"
                        type="text"
                        placeholder="Buscar Ações..."
                        maxLength="50"
                        value={titleInput}
                        onChange={handleTitleInput}
                    ></input>
                </div>
                <div className="label"> título </div>
            </div>
            <div className="search-item">
                <div
                    className={
                        "grad-border " +
                        (categoryInput != "Todas" ? "active" : "")
                    }
                >
                    <select
                        className="category-input"
                        value={categoryInput}
                        onChange={handleCategoryInput}
                    >
                        <option className="category-item" value="Todas">
                            Todas
                        </option>
                        {categories.map((category) => (
                            <option
                                className="category-item"
                                value={category.name}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="label"> categoria </div>
            </div>
            <div className="search-item">
                <i onClick={handleSearch} className="fas fa-search"></i>
                <div className="btn-label"> pesquisar </div>
            </div>
        </div>
    );
}

export default Search;

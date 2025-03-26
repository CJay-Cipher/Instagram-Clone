import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
    return (
        <div className="nav-search-bar">
            <LuSearch className="nav-search-icon" />
            <input type="text" placeholder="Search" />
        </div>
    );
};

export default SearchBar;

import React, { useState, useCallback } from "react";
import "./SearchBar.css";

function SearchBar(props) {

    const [term, setTerm] = useState('');

    const termChange = useCallback((event) => {setTerm(event.target.value)}, []);
    const search = useCallback(() => {props.onSearch(term)}, [props.onSearch, term]);

    return (
        <div>
            <input id="search-bar" type="search" placeholder="Choose a Song!" onChange={termChange} />
            <button id="search-button" onClick={search}>SEARCH</button>
        </div>
    );
};

export default SearchBar;
import React from "react";

function SearchBar({ searchFunction }) {
  return (
    <input
      type="text"
      className="form-control form-search"
      onChange={event => searchFunction(event.target.value)}
    />
  );
}

export default SearchBar;

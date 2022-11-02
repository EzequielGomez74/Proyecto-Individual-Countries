import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../Actions";
import "../Styles/searchbar.css";

export default function SearchBar() {
const dispatch = useDispatch();
const [name, setName] = useState("");

function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameCountries(name));
    setName("");
  }

  return (
    <div className="orders3">
      <div className="input-wrapper">
    <span className="searchBar">
      <input
        className="input"
        type="text"
        value={name}
        placeholder="Find your country..."
        onChange={(e) => handleInputChange(e)}
      />
      <div>
      <button type="submit" onClick={(e) => handleSubmit(e)} className="btn">
        <span>Search</span>
      </button>
      </div>
    </span>
    </div>
    </div>
  );
}
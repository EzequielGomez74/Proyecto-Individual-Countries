import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/actions/index";
import "./SearchBar.css";

export default function SearchBar() {
const dispatch = useDispatch();
const [name, setName] = useState("");

function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getCountriesByName(name));
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
        placeholder="Escribe el pais..."
        onChange={(e) => handleInputChange(e)}
      />
      <div>
      <button type="submit" onClick={(e) => handleSubmit(e)} className="btn">
        <span>Buscar</span>
      </button>
      </div>
    </span>
    </div>
    </div>
  );
}
import React from "react";
import "../Styles/paginate.css";


export default function Paginate ({ countriesPerPage, allCountries, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="btnPag">
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
    </nav>
    )
}





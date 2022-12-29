import React from "react";
import "../Styles/paginate.css";

export default function Pagination({countriesPerPage, allCountries, paginate, currentPage}){
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
    pageNumbers.push(i)
  }
  if(currentPage === pageNumbers.length + 1){
    paginate(1)
  }

  return(
    <div className="btnPag">
      

      {
        pageNumbers && pageNumbers.map(number => (
          <button key = {number} onClick = {() => paginate(number)}>
            {currentPage === number ? <b>{number}</b> : number}
          </button>
        ))
      }

      
    </div>
  )
};





import React from "react";
import "../Styles/paginate.css";


// export default function Paginate ({ countriesPerPage, allCountries, paginate }) {
//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
//         pageNumbers.push(i);
//     }
//     return (
//         <nav className="btnPag">
//       {pageNumbers &&
//         pageNumbers.map((number) => (
//           <button key={number} onClick={() => paginate(number)}>
//             {number}
//           </button>
//         ))}
//     </nav>
//     )
// }


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
      <button
        onClick={() => 
          paginate(currentPage === 1 ? pageNumbers.length : currentPage -1)}
          > « </button>

      {
        pageNumbers && pageNumbers.map(number => (
          <button key = {number} onClick = {() => paginate(number)}>
            {currentPage === number ? <b>{number}</b> : number}
          </button>
        ))
      }

      <button onClick={() => paginate(currentPage === 0 ? currentPage : currentPage + 1)}
      > » </button>
    </div>
  )
};





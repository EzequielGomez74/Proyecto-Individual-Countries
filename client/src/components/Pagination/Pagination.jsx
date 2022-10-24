// import React from "react";

// export default function Pagination({countriesPerPage, allCountries, pagination}){
//   const pageNumbers = [];


// for(let i =1; i <= Math.ceil(allCountries/countriesPerPage); i++){
//   pageNumbers.push(i);

//   return(
//     <nav>
//       <ul>
//         { pageNumbers &&
//          pageNumbers.map(number => (
//             <li key={number}>
//               <button onClick={() => pagination(number)}>{number}</button>
//             </li>
//           )) 
//         }
//       </ul>

//     </nav>
//   )
// }
// }



// import React, {} from 'react'



// export default function Pagination({ allCountries, countriesPerPage, pagination, currentPage }) { //recibo las props de Videogames.js
    
//   if(Math.ceil(allCountries /countriesPerPage ) < currentPage ) { // si la cantidad de páginas es menor a la página actual, entonces la página actual es la última página
//     pagination(1) // actualiza el estado de la página actual
//   }

//     const pageNumbers = [];
//     for(let i = 1; i <= Math.ceil(allCountries /countriesPerPage ); i++){ //redondea los personajes sobre la cantidad de personajes que tengo por pagina.
//         pageNumbers.push(i); // lo pusheo ---> [1 al 25]


import React from "react";

export default function Paginado({countriesPerPage, currentPage, allCountries, pagination}) {


    const pageNumbers=[]

    for (let i=1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
       
    }
     if(currentPage === pageNumbers.length + 1){
          pagination(1)
       } 

   
    return(
        <div>
            <button
				onClick={() =>
					pagination(currentPage === 1 ? pageNumbers.length : currentPage - 1) //pageNumber.length es para que vuelva a 25, sino quedaría en currentPage
				}
			> « </button>

            {pageNumbers && pageNumbers.map(number => (
                <button
                key={number}
                onClick={() => pagination(number)}
            >
            {currentPage === number ? <b>{number}</b> : number}
            </button>
            ))}

            <button
				onClick={() =>
					pagination(
						currentPage === 0 ? currentPage : currentPage + 1,
					)
				}
			> » </button>

      
        </div>
    )
}
import React, { useState } from "react";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCountries, filterContinent, filterActivities} from "../../redux/actions/index";
import Card from "../Card/Card";
import {Link} from 'react-router-dom';
import Pagination from "../Pagination/Pagination";
import './home.css';

export default function Home (){
    const dispatch = useDispatch();

    const allCountries = useSelector ((state) => state.countries)
   // const allActivities= useSelector ((state) => state.activities)
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countriesPerPage; //10
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //0
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber) 
    }

    useEffect(() => {
        dispatch(getCountries());
	}, [dispatch]);

    function handleClick(e) {
		e.preventDefault();
		dispatch(getCountries());
	}
    
    function handleFilterContinent(e){
        e.preventDefault();
        dispatch(filterContinent(e.target.value)); //agarro el valor del evento donde se clickea?
        setCurrentPage(1);
    };

    function handleFilterActivities(e){
        e.preventDefault();
        dispatch(filterActivities(e.target.value));
        setCurrentPage(1);
    };

    return(
            <div>
                 <h1>Countries</h1>
         <button onClick={e => {handleClick(e)}}>Cargar los Paises</button>

      <div>
        <div>
        <h4>Buscar por Continente</h4>
        <select onClick={(e) => handleFilterContinent(e)}>
            <option value= "All">Todos</option>
            <option value= "Europe">Europa</option>
            <option value= "South America">Sur America</option>
            <option value= "North America">Norte America</option>
            <option value= "Africa">Africa</option>
            <option value= "Oceania">Oceania</option>
            <option value= "Antarctica">Antartida</option>
        </select>
        </div>

        <div>
            <h4>Buscar por Actividades </h4>
            <select onClick={(e) => handleFilterContinent(e)}>
            <option value= "filterByActivity">Filtro por actividad</option>
            </select>
        </div>
      </div>



         <Pagination
                        countriesPerPage={countriesPerPage}
                        allCountries={allCountries.length}
                        pagination={pagination}
                        currentPage={currentPage}
                        />
                        <div className="CardContainer">
                {currentCountries?.map((c) => (
                    <div key={c.id} >
                        
                        <Card id={ c.id }
                            name = { c.name }
                            image = { c.image }
                            continent = { c.continent }
                            />
                              
                    </div>     
                                     
                ))}
              </div>
            </div>
                
    )
}
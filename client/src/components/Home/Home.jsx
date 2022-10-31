import React, { useState } from "react";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCountries, filterContinent, filterActivities} from "../../redux/actions/index";
import Card from "../Card/Card";
import {Link} from 'react-router-dom';
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import "../SearchBar/SearchBar.css"
import './home.css';


export default function Home (){
    const dispatch = useDispatch(); 

    const allCountries = useSelector ((state) => state.countries) //traigo todos los paises
   // const allActivities= useSelector ((state) => state.activities)
    const [currentPage, setCurrentPage] = useState(1); //pagina actual
    const [countriesPerPage] = useState(10); //cantidad de paises por pagina
    const indexOfLastCountry = currentPage * countriesPerPage; //10
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //0
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry); // aca se filtran los paises por pagina

    
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber) 
    }

    useEffect(() => { 
        dispatch(getCountries());
	}, [dispatch]); 

    function handleClick(e) { //funcion para filtrar por continente
		e.preventDefault(); //evita que se recargue la pagina
		dispatch(getCountries()); //traigo todos los paises
	}
    
    function handleFilterContinent(e){
        e.preventDefault(); //evita que se recargue la pagina
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
                 <h1 className="TituloHome">Countries</h1>
         <button onClick={e => {handleClick(e)}}>Cargar los Paises</button>

      <div>
        <div>
        <h4>Buscar por Continente</h4>
        <select onChange={(e) => handleFilterContinent(e)}>
            <option value= "All">Todos</option>
            <option value= "Europe">Europa</option>
            <option value= "South America">Sur America</option>
            <option value= "North America">Norte America</option>
            <option value= "Africa">Africa</option>
            <option value= "Oceania">Oceania</option>
            <option value= "Antarctica">Antartida</option>
        </select>
        </div>

        
        <SearchBar />
        <div>
            <h4>Buscar por Actividades </h4>
            <select onChange={(e) => handleFilterContinent(e)}>
            <option value= "filterByActivity">Filtro por actividad</option>
            {/* // ACA VAN LAS ACTIVIDADES */}
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


    
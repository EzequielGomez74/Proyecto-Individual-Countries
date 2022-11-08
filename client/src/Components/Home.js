import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    getCountries,
    getActivities,
    orderByName,
    orderByPopulation,
    filterByContinent,
    filterByActivities,
} from "../Actions/index";
import Card from "./Card";

import Paginate from "./Paginate";
import SearchBar from "./SearchBar";
import "../Styles/home.css";



export default function Home(){

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const activities = useSelector((state) => state.activities);
    
    let [ currentPage, setCurrentPage ] = useState(1);
    let [ countriesPerPage, setCountriesPerPage ] = useState(10);
    if (currentPage === 1) countriesPerPage = 9; 
   
    const indexLastCountry = currentPage * countriesPerPage;
    const indexFirstCountry = indexLastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(
        indexFirstCountry,
        indexLastCountry
    );

    const paginate = (pageNumber ) => {
        setCurrentPage(pageNumber);
    };

 
    const [ orderName, setOrderName ] = useState("");
    const [ orderPopulation, setOrderPopulation ] = useState("");

    useEffect( () => {
        if (!allCountries.length) {
        dispatch( getCountries())}
        dispatch( getActivities())
        
    }, [ dispatch ]);

  

    function handleClick(e){
        e.preventDefault();
        dispatch( getCountries() );
    }

    function handleSelectByContinent(e){
        e.preventDefault();
        dispatch(filterByContinent( e.target.value ))
        setCurrentPage(1)
    }

    function handleSelectByActivities(e){
        e.preventDefault();
        dispatch(filterByActivities( e.target.value ))
        setCurrentPage(1)
    }

    function handleSelectByName(e){
        e.preventDefault();
        dispatch(orderByName ( e.target.value ))
        setCurrentPage(1)
        setOrderName("Order" + e.target.value)
    }

    function handleSelectByPopulation(e){
        e.preventDefault();
        dispatch(orderByPopulation ( e.target.value ))
        setCurrentPage(1)
        setOrderPopulation("Order" + e.target.value)
    }
    

    return (
        <div className="home">
        <div className="bg2">

            <div className="head">

            <div>
                <h1 className="tittle">¡PI COUNTRIES!</h1>
            </div>
                
            </div> 
               
               <div className="btnshome">
                <button className="showAll"
                    onClick = { (e) => { handleClick(e) }}> View All
                </button>
                <Link to="/activity" >
                    <button className="showAll">Create Activity</button>
                </Link>
                </div>
            
            

            <div className="select">

                <div className="ordershome">
                <span className="spantittle">ORDER</span> 
                <div className="orders2">
                    <div className="orders3">   
                <span className="span">by Name</span>
                <select onChange={(n) => handleSelectByName(n)}>
                <option value="default">All</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
                </select></div>

                

                <div className="orders3">
                <span className="span">by Population</span>        
                <select onChange={(n) => handleSelectByPopulation(n)}>
                <option value="default">All</option>
                <option value="desc">+ to -</option>
                <option value="asc">- to +</option>
                </select>
                </div>
                </div></div>

                <div className="orders3">    
                <SearchBar />
                </div> 

                <div className="ordershome">
                <span className="spantittle">FILTER</span>
                <div className="orders2">
                <div className="orders3">    
                <span className="span">by Continent</span>
                <select onChange={(e) => handleSelectByContinent(e)}>
                <option value="All">All Countries</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Americas">Americas</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Antarctic">Antarctic</option>
                </select>
                </div>

                <div className="orders3">
                <span className="span">by Activities</span>
                <select onChange = { (e) => handleSelectByActivities(e)}>
                <option value="All">All Countries</option>
                {activities.map((a) => (
                    <option value={ a.name } key={ a.id }>{a.name}</option>
                ))}
                </select>
                </div>
                </div>
                </div>

            </div>

            <div className="paginate">
                <Paginate
                countriesPerPage = { countriesPerPage }
                allCountries = { allCountries.length }
                paginate = { paginate }
                />
            </div>


            <div className="cards">
                {currentCountries?.map((c) => (
                    <div key={c.id} >
                        <Link to = { "/home/" + c.id } className = "linkCard">
                             
                            <Card
                            name = { c.name }
                            flag = { c.flag }
                            continent = { c.continent }
                            population = { c.population }
                            id = { c.id }
                            />
                    </Link>     
                    </div>                      
                ))}
            </div>

            <div className="paginate2">
                <Paginate
                countriesPerPage = { countriesPerPage }
                allCountries = { allCountries.length }
                paginate = { paginate }
                />
            </div>



        </div>
        </div>
    )
}


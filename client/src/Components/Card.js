import React from "react";
import "../Styles/Card.css";


export default function Card({name, flag, continent, population, capital,subregion}) {
    return (
        <div className="cardComp">
        <div className="cardComp2">

                <div className="leftCard">
                <div className="flag">
                    <img src= {flag} className="flag"
                    alt= "Flag not found"/>
                </div>
                </div>

                <div className="rightCard">
                    <h2>{name}</h2>
                    <div className="rightCardBottom">
                       
                        <div className="items">
                            <p>Capital</p>
                            <p>{capital}</p>                            
                        </div>
                        <div className="items">
                            <p>Continente</p>
                            <p>{continent} </p>
                        </div>
                       
                    </div>

                </div>
                
            
        </div>
        </div>
    )
}
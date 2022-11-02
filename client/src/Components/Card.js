import React from "react";
import "../Styles/Card.css";


export default function Card({name, image, continent, population}) {
    return (
        <div className="cardComp">
        <div className="cardComp2">

                <div className="leftCard">
                <div className="flag">
                    <img src= {image} className="flag"
                    alt= "Flag not found"/>
                </div>
                </div>

                <div className="rightCard">
                    <h2>{name}</h2>
                    <div className="rightCardBottom">
                       
                        <div className="items">
                            <p>Continent</p>
                            <p>{continent}</p>                            
                        </div>
                        <div className="items">
                            <p>Population</p>
                            <p>{population.toLocaleString("en-US")} </p>
                        </div>
                    </div>
                </div>
                
            
        </div>
        </div>
    )
}
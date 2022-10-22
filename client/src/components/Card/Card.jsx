import React from "react";
import './Card.css';


export default function Card ({ name, image, continent, id}) { //destructuring
    return ( //retorna la carta 
        <div >
            <div >
    <h3>{name}</h3>
            </div>
    <img src={image} alt='img not found' /> 
            <div >
        <p>
    <h5>{continent}</h5>
    </p>
            </div>
        </div>
        
    );
}
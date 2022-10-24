import React from "react";
import './Card.css';


export default function Card ({ name, image, continent, id}) { //destructuring
    return ( //retorna la carta 
        <div className="cardprincipal">      
      <h3>{name}</h3>
     
     <img src={image} alt='img not found' /> 
      <p>
        
    <h5>{continent}</h5>
    
    </p>
      </div>
        
    );
}
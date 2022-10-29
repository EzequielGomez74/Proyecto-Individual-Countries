import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

export default function Card({ name, image, continent, id }) {
  return (
    <>
    <div className='Contenedor2'>
    <div className='card__container'>
             <div className='card__container-img'>
          <img
            
            src={image}
            alt='img'
          />
          </div>
          
          <h3 className='card__container-title'>{name}</h3>
          <h5 className='card__container-subtitle'>{continent}</h5>
          <Link to={`/countries/${id}`}>
          <button className='card__container-btn'>Read more</button>
        </Link>
        
      </div>
      </div>
    </>
  );
}


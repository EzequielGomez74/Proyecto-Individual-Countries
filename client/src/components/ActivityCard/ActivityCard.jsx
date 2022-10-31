import React from 'react';

function ActivityCard({name,difficulty,duration,season}) {
    return ( 
        <div>
            <div>
                <div>
                    <h2>Actividad: {name} </h2>
                    <h4>Dificultad: {difficulty}</h4>
                    <h6>duración: {duration}</h6>
                    <h6>Temporada: {season}</h6>
                </div>
            </div>
        </div>
     );
}

export default ActivityCard;
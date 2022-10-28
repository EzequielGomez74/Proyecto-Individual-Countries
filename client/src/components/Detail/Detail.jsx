import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail, deleteActivity } from "../Actions";
import "./Detail.css";


export default function Detail(props) {
    
    const dispatch = useDispatch();

    const [ cambio, setCambio] = useState(false);
    const detail = useSelector((state) => state.detail);
    const allActivities = useSelector((state) => state.activities)

    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
        setCambio(true);   
    }, [dispatch, props.match.params.id]);

    // function handleDelete(id){
    //     dispatch(deleteActivity(id));
    //     alert('Deleted')
    // }
   console.log(detail.activities)
  

   

    return (
        
        <div className="container">
            <Link to="/home">
                    <button className="homebtn">Home</button>
                </Link>
            
            <div className="detail">
                
                    <div>
                       <h1>{detail.name}</h1> 

                        <div >
                        <img src={detail.flag} alt="" className="flagdetail"/>
                        </div>

                    <div className="info">
                       <div className="info1">
                            <div>
                            <h2 className="tittle2">Continent</h2>
                            <h2>{detail.continent}</h2>
                            </div>

                            <div>
                            <h2 className="tittle2">Region</h2>
                            <h2>{detail.subregion ? detail.subregion : "Information not avaible"}</h2>
                            </div>

                            <div>    
                            <h2 className="tittle2">Capital</h2>
                            <h2>{detail.capital}</h2>
                            </div>

                            <div>    
                            <h2 className="tittle2">ID</h2>
                            <h2>{detail.id}</h2>
                            </div>
                        </div>
                        
                        <div className="info2">
                            <div>
                            <h2 className="tittle2">Extension</h2>
                            <h2>{detail.extension} Km</h2>
                            </div>

                            <div className="box">
                                <h2 className="tittle2">Google Maps</h2>
                                <a href={detail.maps} target="_blank">
                                <img src={globo} className="img" ></img>
                                </a>
                            </div>

                            <div>
                           <h2 className="tittle2">Population</h2>
                            <h2>{detail.population}</h2>
                            </div>
                        </div>
                    </div>
                    </div>

                    
                    <div >
                        <h2>Activities</h2>
                        <div className="activityCards">
                        {
                           detail.activities && detail.activities.length ?
                           detail.activities.map((a) => {
                            return (
                                <div  className="activityCard" key={a.country_activities.activityId}>
                                    <div  className="deletebtn">
                                    <button
                                    onClick={() =>
                                        dispatch(deleteActivity(a.country_activities.activityId),
                                        window.location.reload(false))
                                    }>x</button>
                                    </div>


                                    <h3 className="activityName">{a.name}</h3>
                                    <p>Id: {a.country_activities.activityId}</p>
                                    <p>Difficulty: {a.difficulty}</p>
                                    <p>Duration: {a.duration} hours</p>
                                    <p>Season: {a.season}</p>
                                    <p> Number of Likes: {a.like}</p>
                                    {console.log(a)}
                                    
                                </div>    
                            )
                           })
                           : <p>This country has no activities</p>
                        }
                    </div>
                    </div>
            </div>
        </div>
    )
}
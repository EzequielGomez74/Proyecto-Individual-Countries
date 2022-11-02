import React, { useState, useEffect } from "react";
import { Link,  useHistory } from "react-router-dom";
import { postActivity,  getCountries } from "../Actions";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/ActivityForm.css";

function validate(input) {
    let errors = {};

    if(input.name) {
        errors.name = ""
    } else { errors.name = "You must name the activity"}

    if(input.difficulty) {
        errors.difficulty = ""
    } else { errors.difficulty = "You must select one difficulty"}

    if(input.duration) {
        errors.duration = ""
    } else { errors.duration = "You must enter a number of hours"}

    if(input.season) {
        errors.season = ""
    } else { errors.season = "You must select the season"}
    
    if(input.countries.length) {
        errors.countries = ""
    } else { errors.countries = "Choose at least one country"}

   return errors; 
}

export default function ActivityCreate(){
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector((state) => state.countries);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const [ input, setInput ] = useState({
        name: "",
        difficulty: 0,
        duration: 0,
        season: "",
        countries: [],
        like: 0,
    });

    function handleChange(e) {
        setInput((input) => ({
            ...input,
            [e.target.name]: e.target.value,
        })
        );
    }


    function handleSelectCountry(e) {
        setInput((input) => ({
            ...input,
            countries: [...input.countries, e.target.value,]
        }));

        setErrors(
            validate({
                ...input,
                countries: [...input.countries, e.target.value],
            })
        )
    }

    function handleSubmit(e) {
        if (input.name  && input.duration && input.season && input.countries ) {
            e.preventDefault();
            dispatch(postActivity(input));
            alert("You add a new Activity");
            setInput({
                name: "",
                difficulty: 0,
                duration: 0,
                season: "",
                countries: [],
            });
            history.push("/home");
        } else {
            e.preventDefault();
            console.log(errors)
            alert("You must complete every field correctly!");
        }
    }

    function handleDelete(e,d){
        e.preventDefault();
        setInput({
            ...input,
            countries: input.countries.filter((country) => country !== d),
        });
    }

    return (
        <div className="bg">
        <div className="create">
            <Link to="/home">
                <button className="buttonToHome">Back Home</button>
            </Link>
            <h1>Add Activity</h1>
            <div className="form">
                <form onSubmit={(e) => handleSubmit(e)}>

                    <div className="inputCreate">
                        <span>Name:   </span>
                        <input
                            className="input"
                            placeholder="Name..."
                            type="text"
                            value={input.name}
                            name="name"
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.name && <p className="errors">{errors.name}</p>}  
                    </div>

                    
                        {/* <input
                            className="inputCreate"
                            placeholder="Difficulty..."
                            type="integer"
                            value={input.difficulty}
                            name="difficulty"
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.difficulty && <p>{errors.difficulty}</p>}   */}

                        <div className="inputCreate">
                            <label>Difficulty:    </label>
                            <label><input
                            type="radio"
                            required
                            name="difficulty"
                            value="1"
                            onChange={(e) => handleChange(e)}
                            />1       
                            </label>                      

                            <label><input
                            type="radio"
                            required
                            name="difficulty"
                            value="2"
                            onChange={(e) => handleChange(e)}
                            />2
                            </label>

                            <label><input
                            type="radio"
                            required
                            name="difficulty"
                            value="3"
                            onChange={(e) => handleChange(e)}
                            />3
                            </label>

                            <label><input
                            type="radio"
                            required
                            name="difficulty"
                            value="4"
                            onChange={(e) => handleChange(e)}
                            />4
                            </label>

                            <label><input
                            type="radio"
                            required
                            name="difficulty"
                            value="5"
                            onChange={(e) => handleChange(e)}
                            />5
                            </label>
                        </div>
                    

                    <div className="inputCreate">
                        <span>Duration:   </span>
                        <input
                            className="input"
                            placeholder="Duration..."
                            type="integer"
                            value={input.duration}
                            name="duration"
                            onChange={(e) => handleChange(e)}
                        /> <span>hrs</span>
                        {errors.duration && <p className="errors">{errors.duration}</p>}  
                    </div>

                    {/* <div>
                        <input
                            className="inputCreate"
                            placeholder="Season..."
                            type="text"
                            value={input.season}
                            name="season"
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.season && <p>{errors.season}</p>}  
                    </div> */}

                    <div className="inputCreate">
                        <span>Season:</span>
                        <select className="input" name="season" id="season" onChange={(e) => handleChange(e)}>
                            <option value="empty"> </option>
                            <option value="Winter" key="Winter">Winter</option>
                            <option value="Autumn" key="Autumn">Autumn</option>
                            <option value="Spring" key="Spring">Spring</option>
                            <option value="Summer" key="Summer">Summer</option>
                        </select>
                        {errors.season && <p className="errors">{errors.season}</p>}  
                    </div>

                    <div className="inputCreate">
                        <span>Like:   </span>
                        <input
                            className="input"
                            placeholder="Like..."
                            type="integer"
                            value={input.like}
                            name="like"
                            onChange={(e) => handleChange(e)}
                        /> 
                     
                    </div>




                    <div className="inputCreate2">
                        <span>Countries:   </span>
                        <select onChange={(e) => handleSelectCountry(e)}>
                            {countries.map((c) => (
                                <option value={c.name} key={c.name}>
                            {c.name}
                            </option>
                            ))}
                        </select>
                        <div className="countryCreate">
                        {input.countries.map((c, i) => (
                            <ul className="c" key={i}>
                                <li>{c}   </li>
                                <button className="delete" onClick={(e) => handleDelete (e, c)}>x</button>
                            </ul>
                        ))}
                        {errors.countries && <p className="errors">{errors.countries}</p>}
                    </div>
                    </div>
                    <button type="submit" className="btncreate">
                        Create
                    </button>
                </form>
            </div>
        </div>
        </div>
    )



}
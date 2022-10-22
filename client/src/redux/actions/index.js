import axios from "axios";

export function getCountries(){
    return async function(dispatch){
        try{ // manejo de errores
            const json = await axios.get('http://localhost:3001/countries'); // pide los paises
            return dispatch({ // despacha la accion con el tipo y el payload
                type: "GET_COUNTRIES", //tipo de accion que se va a despachar
                payload: json.data 
        })
} catch (error){
    console.log(error)
}
    }
}

export function getCountriesName(name){
    return async function(dispatch){
      try {
        let json = axios.get(`http://locashost:3001/countries?name=${name}`)
        return dispatch({
            type: "GET_COUNTRIES_NAME",
            payload: json.data
        })
        } catch (error){
            console.log(error)
            alert("Debes ingresar un pais existente")
        }
    }
};

export function filterContinent(payload){
    return async function(dispatch){
        try {
            return dispatch({
                type: "FILTER_CONTINENT",
                payload,
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export function filterActivities(payload){
    return async function(dispatch){
        const activities = await axios.get("http://localhost:3001/activities")
        .then(res => dispatch({type: "FILTER_ACTIVITIES", payload: res.data}))
        .catch(err => dispatch({type:"FILTER_ACTIVITIES", payload:[]}))
    };
};

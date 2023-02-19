import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_NAME_COUNTRIES = "GET_NAME_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES";
export const POST_ACTIVITIES = "POST_ACTIVITIES";
export const GET_DETAIL = "GET_DETAIL"
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const CLEAN = "CLEAN";



export function getCountries() { 
    return async function (dispatch) { 
      try{
      var json = await axios.get("proyecto-individual-countries-production.up.railway.app/countries"); 
      return dispatch({
        type: "GET_COUNTRIES",
        payload: json.data,
      });
    } catch (error){
      console.log(error)
    }
    };
};

export function getNameCountries(name) {
    return async function (dispatch) {
      try {
        const json = await axios.get(
          "proyecto-individual-countries-production.up.railway.app/countries?name=" + name
        );
        return dispatch({
          type: "GET_NAME_COUNTRIES",
          payload: json.data,
        });
      } catch (error) {
        alert("Not Country found");
      }
    };
};

export function getDetail(id) {
    return async function (dispatch) {
      try {
        var json = await axios.get("proyecto-individual-countries-production.up.railway.app/countries/" + id);
        return dispatch({
          type: "GET_DETAIL",
          payload: json.data,
        });
        
      } catch (error) {
        alert("Id not found");
      }
      
    };
    
};


export function getActivities() { //esto es para traer las actividades
    return async function (dispatch) { //funcion asincrona que recibe un dispatch como parametro 
      try{
      var json = await axios.get("proyecto-individual-countries-production.up.railway.app/activities");
      return dispatch({ //esto es para que el reducer reciba el dispatch
        type: "GET_ACTIVITIES",
        payload: json.data,
      });
    } catch (error){
      console.log(error)
    }
    }; 
};

export function orderByName(payload) {
    return {
      type: "ORDER_BY_NAME",
      payload,
    };
};

export function orderByPopulation(payload) {
    return {
      type: "ORDER_BY_POPULATION",
      payload,
    };
};

export function filterByContinent(payload) {
    return {
      type: "FILTER_BY_CONTINENT",
      payload,
    };
};

export function filterByActivities(payload) { 
    return {
      type: "FILTER_BY_ACTIVITIES",
      payload,
    };
};

export function postActivity(payload) {
    return async function () {
      const json = await axios.post("proyecto-individual-countries-production.up.railway.app/activity", payload);
      return {
        type: "POST_ACTIVITIES",
        json,
      };
    };
};

export function deleteActivity(id) {
  return async function (dispatch) { 
     try{ 
      const activity = await axios.delete(`proyecto-individual-countries-production.up.railway.app/activities/${id}`)
      return dispatch({ 
        type: DELETE_ACTIVITY, 
        payload: activity, 
      });
     } catch (error){
      alert(error)
     }
  };
};

export function Clean() {
    return {
      type: "CLEAN",
    };
}
import axios from 'axios';

export function getCountries() {
  return async function (dispatch) {
    return await axios('http://localhost:3001/countries').then((res) => {
      dispatch({
        type: 'GET_COUNTRIES',
        payload: res.data,
      });
    });
  };
}

export function getActivities() {
  return async function (dispatch) {
    return await axios('http://localhost:3001/allactivities').then((res) => {
      dispatch({
        type: 'GET_ACTIVITY',
        payload: res.data,
      });
    });
  };
}

export function getCountriesByName(name) {
  return async function (dispatch) {
    try {
      let res = await axios.get(`http://localhost:3001/countries?name=${name}`);
      return dispatch({
        type: 'GET_COUNTRIES_BY_NAME',
        payload: res.data,
      });
    } catch (error) {
      alert('Whoops! The country could not be found.');
    }
  };
}

export function getCountriesById(id) {
  return async function (dispatch) {
    try {
      let res = await axios.get(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: 'GET_COUNTRIES_BY_ID',
        payload: res.data[0], 
      });
    } catch (error) {
      alert('Whoops! The country could not be found.');
    }
  };
}

export function orderByName(payload) {
  return {
    type: 'ORDER_NAME',
    payload,
  };
}

export function orderByPopulation(payload) {
  return {
    type: 'ORDER_POPULATION',
    payload,
  };
}

export function filterContinent(payload) {
  return {
    type: 'FILTER_CONTINENT',
    payload,
  };
}

export function filterActivities(payload) {
  return {
    type: 'FILTER_ACTIVITY',
    payload,
  };
}

export function postActivity(payload) {
  return async function (dispatch) {
    let res = await axios.post(`http://localhost:3001/activities/`, payload);
    return dispatch({
      type: 'NEW_ACTIVITY',
      payload: res.data,
    });
  };
}

export function deleteActivity(id) {
  return async function (dispatch) {
    let res = await axios.delete(`http://localhost:3001/activities/${id}`);
    return dispatch({
      type: 'DELETE_ACTIVITY',
      payload: res.data,
    });
  };
}
export function getDetail(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/countries/${id}`)
      return dispatch({
        type: 'GET_DETAIL',
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function Clean () {
  return function (dispatch) {
    dispatch({
      type: 'CLEAN',
    });
  };
  
}



export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID';
export const ORDER_NAME = 'ORDER_NAME';
export const ORDER_POPULATION = 'ORDER_POPULATION';
export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';
export const NEW_ACTIVITY = 'NEW_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const CLEAN = 'CLEAN';
export const GET_DETAIL = 'GET_DETAIL';

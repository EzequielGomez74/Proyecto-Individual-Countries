import {
GET_COUNTRIES,
GET_NAME_COUNTRIES,
GET_ACTIVITIES,
GET_DETAIL,
ORDER_BY_NAME,
ORDER_BY_POPULATION,
FILTER_BY_CONTINENT,
FILTER_BY_ACTIVITIES,
POST_ACTIVITIES,
DELETE_ACTIVITY,
} from '../Actions';

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    detail: [],
};

function rootReducer ( state = initialState, action ){
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            };

        case GET_NAME_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            };

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            };
        
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload,
            };

        case ORDER_BY_NAME:
            const countriesByName = state.countries;
            const orderedCountriesbyName = countriesByName.sort(function (a,b) {
                if (action.payload === 'asc') {
                    if ( a.name < b.name ) {
                        return -1;
                    } else if ( a.name > b.name ) {
                        return 1;
                    } else {
                        return 0;
                    }
                } else if (action.payload === 'desc') {
                    if ( a.name > b.name ) {
                        return -1;
                    } else if ( a.name < b.name ) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
                return 'Ordered';
            });
            return {
                ...state,
                countries: orderedCountriesbyName,
            };

        case ORDER_BY_POPULATION:
            const countriesByPopulation = state.countries;
            const orderedCountriesByPopulation = countriesByPopulation.sort(function (a,b) {
                if (action.payload === 'asc') {
                    if ( a.population < b.population ) {
                        return -1;
                    } else if ( a.population > b.population ) {
                        return 1;
                    } else {
                        return 0;
                    }
                } else if (action.payload === 'desc') {
                    if ( a.population > b.population ) {
                        return -1;
                    } else if ( a.population < b.population ) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
                return 'Ordered';
            });
            return {
                ...state,
                countries: orderedCountriesByPopulation,
            };

        case FILTER_BY_CONTINENT:
            
            state.countries = state.allCountries;
            const countriesByContinent = state.countries;
            const filteredbyContinent = action.payload === 'All' 
            ? countriesByContinent : countriesByContinent.filter(c => c.continent === action.payload);
            return {
                ...state,
                countries: filteredbyContinent
            };
        
        case FILTER_BY_ACTIVITIES:
       
            state.countries = state.allCountries
            let filteredbyActivity = action.payload === 'All'
            ? state.allCountries : state.countries.filter((c) => {
                    const activities = c.activities.map((a) => a.name)
                    return activities.includes(action.payload)

                    });
            return {
                ...state,
                countries: filteredbyActivity
            };

        case POST_ACTIVITIES:
            return {
                ...state,
            };

        case DELETE_ACTIVITY:
            return {
                ...state,
                activities: state.activities.filter((a) => a.id !== action.payload)
            };    

        default:
            return state; 
    }
};

export default rootReducer;
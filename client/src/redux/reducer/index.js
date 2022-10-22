const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    };

    export default function reducer(state = initialState, action){ //reducer es una funcion que recibe un estado y una accion
        console.log("actions");
        switch(action.type){ //switch es un condicional que recibe un parametro y evalua cada uno de los casos
            case "GET_COUNTRIES": 
                console.log("get countries");
                return { //retorna un nuevo estado
                    ...state,
                    countries: action.payload, 
                    allCountries: action.payload, 
                }
                case "FILTER_CONTINENT": //este caso es para filtrar por continente
                    const allCountries = state.allCountries; //declaro una variable que contiene el estado de allCountries
                    const continentFiltered = action.payload === "All" ? allCountries: allCountries.filter(c => c.continent === action.payload) //declaro una variable que contiene el estado de allCountries filtrado por continente
                    return { 
                        ...state,
                        countries: continentFiltered, //cambio el estado de countries por el filtrado
                    }
                    case "FILTER_ACTIVITIES":
                        const allCountries2 = state.AllCountries; //declaro una variable que contiene el estado de allCountries
                        const activitiesFiltered = action.payload === 'Filter By Activities' ? allCountries2: allCountries2.filter (c => c.activities.filter(act => act.name === action.payload)) //declaro una variable que contiene el estado de allCountries filtrado por actividad
                        return {
                            ...state,
                            activities: activitiesFiltered,
                        }
                        default:
                            return state;
        }
    };
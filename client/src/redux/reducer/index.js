const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  };

  export default function reducer(state = initialState, action){
    console.log("chauchis"); 
    switch(action.type) { 
      case "GET_COUNTRIES":
        console.log("holis");
        return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      }
      case "GET_COUNTRIES_NAME":
        return {
          ...state,
          countries: action.payload
        }
      case "FILTER_CONTINENT":
        const allCountries = state.allCountries;
        const continentFiltered = action.payload === "All" ? allCountries : allCountries.filter(c => c.continent === action.payload)
        return {
            ...state,
            countries: continentFiltered
        }
      case "FILTER_ACTIVITIES":
        const allCountries2 = state.allCountries; 
        const activitiesFiltered = action.payload === 'Filter By Activities' ? allCountries2 : allCountries2.filter(c => c.activities.filter(act => act.name === action.payload))
        return { 
          ...state,
          activities: activitiesFiltered,
        }

    
      default:
        return state;
    }
  };

// const initialState={
//   allCountries:[],
//   countries:[],
// }

// function reducer(state= initialState, action ) {
//   switch(action.type) {

//       case 'GET_COUNTRIES': 
//       return {
//           ...state,
//           countries:action.payload,
//           allCountries:action.payload,
//       }

//       case 'GET_COUNTRIES_BY_NAME':
//           return {
//               ...state,
//               countries:action.payload
//           }
//       default: 
//       return state;
//   }
// }



// export default reducer;
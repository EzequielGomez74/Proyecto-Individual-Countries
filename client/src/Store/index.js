import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from '../Reducer/';


const store = createStore( rootReducer, 
    composeWithDevTools( applyMiddleware(thunk) //el thunk es un middleware que permite hacer peticiones asincronas para despachar acciones.
));

export default store;

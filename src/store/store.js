import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/uauthReducer';

// cominanmos los reducers cin la funcion
const reducres = combineReducers({
    auth: authReducer

})


// se crea el store, pero solo recive un reducer
export const store = createStore( 
        reducres,
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
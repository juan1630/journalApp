import thunk  from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/uauthReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;





// cominanmos los reducers cin la funcion
const reducres = combineReducers({
    auth: authReducer

})


// se crea el store, pero solo recive un reducer
export const store = createStore( 
        reducres,
        composeEnhancers(
        
            applyMiddleware( thunk )
            
        )    
    );
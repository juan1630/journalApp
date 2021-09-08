
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 
import {startNewNote } from '../../../actions/notes' 

const middlewares = [ thunk ];

const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        ui: "TEST"
    }
})

describe('Pruebas en el notes actions' , ( ) => {
    
    test('Debe de crear una nueva nota', async () => {
       await store.dispatch( startNewNote() );
   });
});

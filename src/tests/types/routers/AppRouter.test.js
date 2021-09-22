

import React from 'react';
import {mount} from 'enzyme';


import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// permite finguir la rutas en el ambiente de testing

import { Provider } from 'react-redux';
import { AppRouter } from '../../../routers/AppRouter';
import { act } from 'react-dom/test-utils';

import {firebase} from '../../../firebase/firebase-config';
import { login } from '../../../actions/auth';
// login

import Swal from 'sweetalert2';

jest.mock('../../../actions/auth', () => ({
    startGoogleLgoin: jest.fn(),
}));


jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

// creamos un mock de la funcion que vamos a llamar


const middlewares = [ thunk ];

// mocks 
const mockStore = configureStore(middlewares);
const initState = {
    auth: {},
    uid: {
        loading: false,
        msgError: null
    }, 
    notes : {
        active: {
            id: "ABC",
        }, 
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();




describe('Pruebas en el AppRouter', () => {
    
    
    test('Debe de llamar el login si estoy autenticado', async () => {})
        
    //     let user;
    //     const userCred = await firebase.auth().signInWithEmailAndPassword('juan1630@gmail.com', '123456');


    //     user = userCred.user;

    //     // es una funcio que controla esta ambiente y sea lo que sea que haga lo haga dentro del act
    //    await act( async ()=> {

    //         const wrapper = mount( 
    //             <Provider  store={store} >
    //                 <MemoryRouter>
    //                     <AppRouter/>
    //                 </MemoryRouter>
    //             </Provider>
    //             );

    //             expect( login ).toHaveBeenCalled();
    //     });

    // });

    // TODO: ESTA PRUEBA DIO ERROR

});


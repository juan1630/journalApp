// imports de librerias de terceros

import React from 'react';
import {mount} from 'enzyme';


import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'
// permite finguir la rutas en el ambiente de testing

import { LoginScreen } from "../../../../components/auth/LoginScreen";
import { Provider } from 'react-redux';
import { startGoogleLgoin, loginWithEmailYPassword } from '../../../../actions/auth';

jest.mock('../../../../actions/auth', () => ({

    startGoogleLgoin: jest.fn(),
    loginWithEmailYPassword: jest.fn()
}));
// creamos un mock de la funcion que vamos a llamar


const middlewares = [ thunk ];

// mocks 
const mockStore = configureStore(middlewares);
const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider  store={store} >

        <MemoryRouter>
            <LoginScreen/>
        </MemoryRouter>
    </Provider>
     );



describe('Pruebas en el loginScreen', () => {

    beforeEach( () => {
        // borramos toda la informcio que esta en el store
        store = mockStore(initState);
        jest.clearAllMocks();
        // limpiamos todos los mocks
    });

    // Que haga el match con el componente
    test('Debe de mostrarse correctamente', ()=> {
        
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe de disparar la accion del startGoogleLogin' , () => {
        
        wrapper.find('.google-btn').prop('onClick')();
        // le asiganamos la propiedad onClick al wrapper 

        expect( startGoogleLgoin ).toHaveBeenCalled();
        // hacemos el expect de que haya sido llamda la función

    });


    test('Debe de disparar el login con los respectivos argumentos', () => {
        
        wrapper.find('form').prop('onSubmit')({
            preventDefault() {}
        });

        expect( loginWithEmailYPassword ).toHaveBeenCalledWith('juan1630@gmail.com','123456')
    });

});

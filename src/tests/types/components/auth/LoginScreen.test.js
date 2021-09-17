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
    });

    // Que haga el match con el componente
    test('Debe de mostrarse correctamente', ()=> {
        
        expect(wrapper).toMatchSnapshot();
    });

});

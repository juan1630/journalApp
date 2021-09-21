

import React from 'react';

import { mount } from "enzyme";

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { RegisterScreen } from "../../../../components/auth/RegisterScreen";


import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 
import '@testing-library/jest-dom';
import { types } from '../../../../types/types';

// jest.mock('../../../../actions/auth', () => ({

//     startGoogleLgoin: jest.fn(),
//     loginWithEmailYPassword: jest.fn()
// }));
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
// store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store} >
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
);



describe('Pruebas en el registerScreen', () => {
    

    test('Debe de hacer match con el snapshot', () => {

        expect( wrapper ).toMatchSnapshot();
    });
    


    test('Debe de hacer el dispatch de la accion respectiva', () => {

        const emailField = wrapper.find('input[name="email"]');
        // console.log( emailField );

        emailField.simulate('change', {
            target: {
                value: '',
                name: 'email'
            }

        })

        wrapper.find('form').simulate('submit', { 
            preventDefault(){}
        });


        const actions = store.getActions();
        // console.log(actions);

        expect( actions[0]).toEqual({
            type: types.uiSetError,
            payload: 'Email is not validate'
        });

    });


    test('Debe de mostrar la caja de alerta con el Error', () => {

        const initState = {
            auth: {},
            ui: {
                loading: false,
                msgError: "El email no es correcto"
            }
        };
        
        
        const store = mockStore(initState);
        // store.dispatch = jest.fn();
        
        const wrapper = mount(
            <Provider store={store} >
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        );
        
            expect( wrapper.find('.auth__alert-error').exists() ).toBe( true );
            expect( wrapper.find('.auth__alert-error').text() ).toBe( initState.ui.msgError );

    });

});
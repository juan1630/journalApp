
import React from 'react';
import {mount} from 'enzyme';


import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 
import '@testing-library/jest-dom';

// permite finguir la rutas en el ambiente de testing

import { Provider } from 'react-redux';

import { Sidebar } from '../../../../components/Journal/Sidebar';
import {  startLogout } from '../../../../actions/auth';
import { startNewNote } from '../../../../actions/notes';


// jest.mock('../../../actions/auth', () => ({
//     startGoogleLgoin: jest.fn(),
// }));z

jest.mock('../../../../actions/auth', () => ({
    startLogout: jest.fn(),
}));

// creamos un mock de la funcion que vamos a llamar

jest.mock('../../../../actions/notes', () => ({
    startNewNote: jest.fn(),
}));



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


const wrapper = mount(
                <Provider store={store} >

                    <Sidebar/> 
                </Provider>
                 
                 );

describe('pruebas en el journal', () => {

    beforeEach( () => {
        // borramos toda la informcio que esta en el store
        store = mockStore(initState);
        jest.clearAllMocks();
        // limpiamos todos los mocks
    });

    test('Debe de mostarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de llamar la accion del logout', () => {
        // llamar el logout 

        wrapper.find('.btn').prop('onClick')();
        
        expect( startLogout ).toHaveBeenCalled();
    });

    test('Debe de llamar el startNewNote', () => {
        
        wrapper.find('.jorunal__new-entry').prop('onClick')();

        expect( startNewNote ).toHaveBeenCalled();

    });

});
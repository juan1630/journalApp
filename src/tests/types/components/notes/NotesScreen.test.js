
import React from 'react';
import {mount} from 'enzyme';


import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 
import '@testing-library/jest-dom';

// permite finguir la rutas en el ambiente de testing

import { Provider } from 'react-redux';

import { NoteScreen } from '../../../../components/notes/NoteScreen';
import { activeNotes } from '../../../../actions/notes';



// jest.mock('../../../actions/auth', () => ({
//     startGoogleLgoin: jest.fn(),
// }));z

jest.mock('../../../../actions/notes', () => ({
    activeNotes: jest.fn(),
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
                id:123,
                title: '',
                body : ''
            }
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();


const wrapper = mount(
                <Provider store={store} >

                    <NoteScreen/> 
                </Provider>
                 
                 );

describe('Pruebas en el NotesScreen', () => {
    
    test('Debe de mostarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de disparar el action note', () => {

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value : 'Hola de nuevo'
            }
        });

    });


    test('Debe de llamarse el note', () => {
        // manda a llamar la ultina funcionn
        expect( activeNotes ).toHaveBeenLastCalledWith(
            123,
            {
                title: 'Hola de nuevo',
                body : '',
                id:123
            }
        );
    });
    
    
});
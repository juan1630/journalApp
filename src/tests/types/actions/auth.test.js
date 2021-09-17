// imoprts de otras depencias y configuración del thunk

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 
import '@testing-library/jest-dom';

import { login, loginWithEmailYPassword, logOut, startLogout } from '../../../actions/auth'
import { types } from '../../../types/types';



const middlewares = [ thunk ];

// mocks 
const mockStore = configureStore(middlewares);
const initState = {};
let store = mockStore(initState);


describe('Pruebas en las acciones del auth', () => {


    beforeEach( () => {
        // borramos toda la informcio que esta en el store
        store = mockStore(initState);
    });


    const uid = 'ABC123';
    const displayName = 'Juan Patrón'
    
    test('Login y logout deben de crear las acciones necesarias' , () => {

        const loginAction = login(uid, displayName);
        const logOutAction = logOut();

        expect(loginAction).toEqual({
            type: types.loggin,
            payload: {
                uid,
                displayName
            }
        });


        expect(logOutAction).toEqual({
            type: types.logout
        })
   
    });


    test('Debe de realizar el logOut de la aplicacion', async () => {
        
           await store.dispatch( startLogout() );
            //  no recibe ningun parametro


            const actions = store.getActions();
            
            expect( actions[0] ).toEqual({
                type: types.logout
            });


            expect( actions[1] ).toEqual({
                type: types.notesLogoutCleaning
            });

    });


    test('Debe de realizar el startLogiWithEmailAndPassword', async() => {

        await store.dispatch( loginWithEmailYPassword( 'juan1630@gmail.com', '123456'));

        const actions = store.getActions();
        // console.log(actions);

        expect( actions[0]).toEqual({
            type: types.uiStartLoading
        });


        expect( actions[1]).toEqual({
            type: types.uiFinishLoading
        });


        expect( actions[2]).toEqual({
            type: types.loggin,
            payload: {
                uid: '184fwxFgxyYLlHbaGgEAAIKkuqp2', 
                displayName: 'Juan' 
            }
        })

    });

});
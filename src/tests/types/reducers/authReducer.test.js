import { authReducer } from '../../../reducers/uauthReducer'
import { types } from '../../../types/types';

describe('Pruebas en el auth reducer ' , ( ) => {

    test('Debe  de retornar el init del state', ()=> {
            // authReducer
        const initState = {};
        
        const action = {
            type: types.loggin,
            payload: {
                uid: "ABC",
                displayName: "Juan"
            }
        };


        const state = authReducer(initState, action);
        // console.log(state);

        expect( state ).toEqual({
            uid:"ABC",
            name: 'Juan'
        });

    });


    test('Debe  de hacer el logout', ()=> {
        // authReducer
    const initState = {};
    
    const action = {
        type: types.logout
    };


    const state = authReducer(initState, action);
    // console.log(state);

    expect( state ).toEqual({ });
    
    });


    test('No debe de hacer cambios en el state', ()=> {
        // authReducer
    const initState = {};
    
    const action = {
        type: 'lkjflfeflel'
    };


    const state = authReducer(initState, action);
    // console.log(state);

    expect( state ).toEqual(initState);
    
});


});
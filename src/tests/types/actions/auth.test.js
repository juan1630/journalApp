import { login, logOut } from '../../../actions/auth'
import { types } from '../../../types/types';


describe('Pruebas en las acciones del auth', () => {

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
});
// imports de otras despencias 
import Swal from 'sweetalert2';

import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { startLoading, finishLoading } from './ui'
import { noteLogout } from './notes';


export const loginWithEmailYPassword = (email, password) => {
    
    // esta funcion retorna un callback
    return (dispatch) => {

        dispatch( startLoading() );

        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {

            dispatch( finishLoading() );
            dispatch( login( user.uid, user.displayName ) );
        })
        .catch( e => {
            Swal.fire('Fail', e.message, 'error');
            dispatch(finishLoading() )
        });
    }
}


export const startGoogleLgoin = () => {
    
    return (dispatch) => {

        //hacemos uso de la funcio auth y el provider es google que esta declarado en el config de firebase
        firebase.auth().signInWithPopup( googleAuthProvider ) 
        .then( ({user})  => {

            dispatch( login( user.uid, user.displayName ));
        })
        .catch( (err) => {
            Swal.fire('Fail', err.message, 'error');
        });
    }
}


export const starRegisterWithEmailPasswordEmail = (name, email, password) => {

    return (dispatch) => {
         firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(  async ({user}) => {

            // actualizamos el displayName porque viene en nulo cuando se hace el registro
          await  user.updateProfile({displayName: name})
                dispatch( login( user.uid, user.displayName) );
         })
         .catch( error  => console.error(error))
    }
}




export const startLogout = () => {
    return async (dispatch) => {
        // esta funcion regresa una promesa
        await firebase.auth().signOut();
        
        dispatch(logOut());
        dispatch( noteLogout() );
    }
}



export const login = (uid, displayName) =>  ({
        type: types.loggin,
        payload: {
            uid,
            displayName,
        }
});

export const logOut = () =>({
    type: types.logout
})
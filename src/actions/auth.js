import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { startLoading, finishLoading } from './ui'


export const loginWithEmailYPassword = (email, password) => {
    
    // esta funcion retorna un callback
    return (dispatch) => {

            dispatch( startLoading() );
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {

            dispatch( finishLoading() );
            dispatch( login( user.uid, user.displayName ) );
        })
        .catch( e => dispatch(finishLoading() ));
    }
}


export const startGoogleLgoin = () => {
    
    return (dispatch) => {

        //hacemos uso de la funcio auth y el provider es google que esta declarado en el config de firebase
        firebase.auth().signInWithPopup( googleAuthProvider ) 
        .then( ({user})  => {

            dispatch( login( user.uid, user.displayName ));
        })
        .catch( (err) => console.error( err));
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


export const login = (uid, displayName) =>  ({
        type: types.loggin,
     
        payload: {
            uid,
            displayName,
        }
});
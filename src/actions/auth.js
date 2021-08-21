import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config'


export const loginWithEmailYPassword = (email, password) => {
    
    // esta funcion retorna un callback
    return (dispatch) => {
        setTimeout(() =>{
            dispatch( login( 123456, 'Juanito' ) )
        }, 3500);
    }
}


export const startGoogleLgoin = () => {
    
    return (dispatch) => {
        //hacemos uso de la funcio auth y el provider es google que esta declarado en el config de firebase
        firebase.auth().signInWithPopup( googleAuthProvider ) 
        .then( ({user})  => {

            dispatch( login( user.uid, user.displayName ));
        })
    }
}


export const login = (uid, displayName) =>  ({
        type: types.loggin,
     
        payload: {
            uid,
            displayName,
        }
});
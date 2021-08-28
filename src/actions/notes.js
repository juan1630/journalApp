import { db } from "../firebase/firebase-config";
import { types } from '../types/types'

export const startNewNote = ( ) => {
    
    // el getState da accesio a todo el state
    return  async (dispatch, getState ) => {

        // obtenemos el UID del usuario
        const {uid} = getState().auth;

        // inicializmaos el objeto del note
        const newNote = {
            title: '',
            body: '',
            dates: new Date().getTime()
        }

        // sirve para en viar a la DB los datos y grbarlos en la rura que se especifica
        const docRef = await db.collection(`${uid}/journal/notes`).add(   newNote );
        // console.log(docRef);

        // hacemos el dispartch de la funcio ativatesNotes que se encuntra abajo
        dispatch( activeNotes( docRef.id, newNote ) );

    }
}



export const activeNotes = (id, note) => ({
 
    type: types.notesActive,
    payload : {
        id,
        ...note
    }
});


export const setNotes = ( notes ) => ({

    type: types.notesLoad,
    payload : notes
    
})



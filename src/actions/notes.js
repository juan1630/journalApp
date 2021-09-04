import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import { fileUploas } from '../helpers/fileUpload';
import { loadNotes } from "../helpers/loadNotes";
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


export const startLoadNotes = ( uid ) => {

    return async ( dispatch ) => {
        
        const notes = await loadNotes(  uid );
        dispatch( setNotes( notes));

    }

}

export const setNotes = ( notes ) => ({

    type: types.notesLoad,
    payload : notes
    
})


export const startSavedNote = (note) => {
    
    return async (dispatch, getState) => {

        console.log(note);

        const { uid } = getState().auth;


        if(!note.url ) {
            delete note.url;
            // borramos esta propiedad del json
            delete note.date;
        }   
        console.log( note );
        const noteToFirestore = { ...note }
        // eliminamos el id del body
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch( refreshNotes( note.id, note ) );
        Swal.fire('Save', note.title, 'success');

    }
}

export const refreshNotes = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})




export const startFileUpload  = (file) => {
    
    return async ( dispatch,  getState ) => {
        
        const { active: activeNotes } = getState().notes;
        // console.log(file, activeNotes)
        const fileUrl = await fileUploas(file);
        console.log( fileUrl ); 
    }
}

import { db } from '../firebase/firebase-config'


// esta funcion se encarga encontrar todas las notes de un usuario

export const loadNotes =  async ( uid ) => {

    const notesSnap = await  db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    // esta sintaxis nos retorna la data de los notes
    notesSnap.forEach( (snapHijo) => {
        //hacemos el push al arreglo de los notes y le agregamos el id
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
        // console.log( snapHijo.data() );
    });

    console.log( notes );
    return notes;
}



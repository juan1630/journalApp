// import de otras depencias 
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 

import {startNewNote, startLoadNotes, startSavedNote, startFileUpload } from '../../../actions/notes' 
import { db } from '../../../firebase/firebase-config';
import { types } from '../../../types/types';

// import { fileUploas } from '../../../helpers/fileUpload';


const middlewares = [ thunk ];

// mocks 
const mockStore = configureStore(middlewares);

jest.mock('../../../helpers/fileUpload',  () =>({

    fileUploas: jest.fn( () => {
        return 'https://hola-mundo/cosa.jpg'
    })

}));

const initState = {
    auth: {
        uid: "TEST"
    },
    notes: {
        active: {
            
            id: '9FM3YmnYdl95qOnfLm62',
            title: 'Hola de nuevo',
            body : 'Hola que tal mundo'
        }
    }
}


let store = mockStore(initState);

describe('Pruebas en el notes actions' , ( ) => {


    beforeEach(() => {
        // esta funcion se dispara antes de cada prueba

        store = mockStore(initState);
    });
    
    test('Debe de crear una nueva nota', async () => {
       await store.dispatch( startNewNote() );

       const actions = store.getActions();
    //    console.log(actions);
        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                
                    id: expect.any(String),
                    title: '',
                    body: '',
                    dates: expect.any(Number)
                
            }
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                dates: expect.any(Number)
            }
        });

        const docId = actions[0].payload.id;

        // borramos de la db el nuevo registro que se creo
        await db.doc(`TEST/journal/notes/${docId}`).delete();

   });

   test('Debe de cargar las notes con el startNewNotes', async () => {

    await store.dispatch( startLoadNotes('TEST') );

    const actions = store.getActions();

    expect( actions[0] ).toEqual({
        type: types.notesLoad,
        payload: expect.any(Array)
    });

    const expectedData = {

        id: expect.any(String),
        title: expect.any(String),
        body: expect.any(String),
        dates: expect.any(Number),
    }

    expect( actions[0].payload[0] ).toMatchObject(expectedData);

   });


   test('StartSaveNote debe de actualizar la nota' , async () => {

        const note = {
           id: 'WAEdoOYMU1tcXRTceoGO',
            title: 'titulo',
            body: 'body'
        }

        await store.dispatch( startSavedNote( note));

        const actions = store.getActions();

        // console.log(actions);

        expect( actions[0].type).toBe( types.notesUpdated );
        
        const doc =  await db.doc(`/TEST/journal/notes/${note.id}`).get();


        expect( doc.data().title ).toBe(note.title);
   });


   test('StartUploading debe de actualizar la url del entry', async () => {

        const file = new File([], 'foto.jpg');
        // creamos el file de prueba 
            await store.dispatch( startFileUpload( file) );

            const docRef = await db.doc(`/TEST/journal/notes/9FM3YmnYdl95qOnfLm62`).get();
            
            expect( docRef.data().url ).toBe('https://hola-mundo/cosa.jpg')
   });


});
